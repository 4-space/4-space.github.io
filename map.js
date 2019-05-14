var mapdata = [
  {
    "location": "All",
    "num": 4617463
  },
  {
    "location": "Texas",
    "num": 2209600
  },
  {
    "location": "California",
    "num": 827420
  },
  {
    "location": "Arizona",
    "num": 791950
  },
  {
    "location": "Louisiana",
    "num": 260214
  },
  {
    "location": "Florida",
    "num": 141393
  },
  {
    "location": "New York",
    "num": 103089
  },
  {
    "location": "Georgia",
    "num": 94937
  },
  {
    "location": "New Jersey",
    "num": 28633
  },
  {
    "location": "Illinois",
    "num": 24451
  },
  {
    "location": "District of Columbia",
    "num": 24267
  },
  {
    "location": "Unknown",
    "num": 15185
  },
  {
    "location": "Michigan",
    "num": 13957
  },
  {
    "location": "Puerto Rico",
    "num": 12493
  },
  {
    "location": "New Mexico",
    "num": 10678
  },
  {
    "location": "Massachusetts",
    "num": 8952
  },
  {
    "location": "Washington",
    "num": 7800
  },
  {
    "location": "Virgin Islands",
    "num": 7419
  },
  {
    "location": "Pennsylvania",
    "num": 5471
  },
  {
    "location": "Minnesota",
    "num": 2937
  },
  {
    "location": "North Carolina",
    "num": 2675
  },
  {
    "location": "Hawaii",
    "num": 2508
  },
  {
    "location": "Colorado",
    "num": 2177
  },
  {
    "location": "Guam",
    "num": 2169
  },
  {
    "location": "Connecticut",
    "num": 2147
  },
  {
    "location": "Maryland",
    "num": 1781
  },
  {
    "location": "Nevada",
    "num": 1681
  },
  {
    "location": "Ohio",
    "num": 1357
  },
  {
    "location": "Oregon",
    "num": 1247
  },
  {
    "location": "North Dakota",
    "num": 1005
  },
  {
    "location": "Alaska",
    "num": 950
  },
  {
    "location": "Maine",
    "num": 850
  },
  {
    "location": "Montana",
    "num": 768
  },
  {
    "location": "Utah",
    "num": 737
  },
  {
    "location": "Vermont",
    "num": 705
  },
  {
    "location": "Outside US",
    "num": 646
  },
  {
    "location": "Kentucky",
    "num": 628
  },
  {
    "location": "Tennessee",
    "num": 420
  },
  {
    "location": "Missouri",
    "num": 416
  },
  {
    "location": "Northern Mariana Islands",
    "num": 373
  },
  {
    "location": "Oklahoma",
    "num": 304
  },
  {
    "location": "Nebraska",
    "num": 239
  },
  {
    "location": "Rhode Island",
    "num": 194
  },
  {
    "location": "South Carolina",
    "num": 177
  },
  {
    "location": "Idaho",
    "num": 108
  },
  {
    "location": "Virginia",
    "num": 103
  },
  {
    "location": "Indiana",
    "num": 98
  },
  {
    "location": "Mississippi",
    "num": 69
  },
  {
    "location": "Wisconsin",
    "num": 26
  },
  {
    "location": "Alabama",
    "num": 15
  },
  {
    "location": "Iowa",
    "num": 15
  },
  {
    "location": "TRAC unmapped",
    "num": 14
  },
  {
    "location": "Delaware",
    "num": 10
  },
  {
    "location": "New Hampshire",
    "num": 5
  }
];

var mapboxAccessToken = 'pk.eyJ1Ijoia2VuZGFscyIsImEiOiJjanY0dDBsaDQwbjRwNDNvY3Z1YnE4dHIxIn0.9-fC2TNMTZ7UH6Vp9jgnyQ';
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light'
}).addTo(map);
    
// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>US Deportation Density</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.density + ' people '
			: 'Hover over a state');
	};

	info.addTo(map);

for(var i = 0; i < statesData.features.length; i++){
    var found = false;
    for (var j = 0; j < mapdata.length; j++){
        if (statesData.features[i].properties.name == mapdata[j].location){
            statesData.features[i].properties.density = mapdata[j].num;
            found = true;
        }
    }
    if (found == false){
        statesData.features[i].properties.density = 0;
    }
}
	// get color depending on population density value
	function getColor(d) {
		return d > 500000 ? '#800026' :
				d > 250000  ? '#BD0026' :
				d > 100000  ? '#E31A1C' :
				d > 50000  ? '#FC4E2A' :
				d > 10000   ? '#FD8D3C' :
				d > 1000   ? '#FEB24C' :
				d > 10   ? '#FED976' :
							'#FFEDA0';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);

	map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 10, 1000, 10000, 50000, 100000, 250000, 500000],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);