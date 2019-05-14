const sample = [
  {
    "Age Group": "0-17",
    "Total": 40720
  },
    
  {
    "Age Group": "18-24",
    "Total": 1048730
  },
  {
    "Age Group": "25-29",
    "Total": 889389
  },
  {
    "Age Group": "30-34",
    "Total": 751693
  },
  {
    "Age Group": "35-39",
    "Total": 550925
  },
  {
    "Age Group": "40-44",
    "Total": 349335
  },
  {
    "Age Group": "45-49",
    "Total": 196996
  },
  {
    "Age Group": "50-54",
    "Total": 100628
  },
  {
    "Age Group": "55-59",
    "Total": 45548
  },
 
  {
    "Age Group": "60-64",
    "Total": 17657
  },
  {
    "Age Group": "65-69",
    "Total": 6803
  },
  {
    "Age Group": "70-74",
    "Total": 2179
  },
  {
    "Age Group": "75+",
    "Total": 1024
  },
  {
    "Age Group": "Unknown",
    "Total": 255
  }
];

for(i = 0; i < sample.length; i++){
    sample[i]["Total"] = sample[i]["Total"] / 10000;
}

const svg = d3.select('#try_this');
const svgContainer = d3.select('#barch');

const margin = 80;
const width = 700 - 2 * margin;
const height = 500 - 2 * margin;

const chart = svg.append('g')
  .attr('transform', `translate(${margin}, ${margin})`);

const xScale = d3.scaleBand()
  .range([0, width])
  .domain(sample.map((s) => s["Age Group"]))
  .padding(0.4)

const yScale = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 105]);

// vertical grid lines
// const makeXLines = () => d3.axisBottom()
//   .scale(xScale)

const makeYLines = () => d3.axisLeft()
  .scale(yScale)

chart.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

chart.append('g')
  .call(d3.axisLeft(yScale));

// vertical grid lines
// chart.append('g')
//   .attr('class', 'grid')
//   .attr('transform', `translate(0, ${height})`)
//   .call(makeXLines()
//     .tickSize(-height, 0, 0)
//     .tickFormat('')
//   )

chart.append('g')
  .attr('class', 'grid')
  .call(makeYLines()
    .tickSize(-width, 0, 0)
    .tickFormat('')
  )

const barGroups = chart.selectAll()
  .data(sample)
  .enter()
  .append('g')

barGroups
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (g) => xScale(g["Age Group"]))
  .attr('y', (g) => yScale(g["Total"]))
  .attr('height', (g) => height - yScale(g["Total"]))
  .attr('width', xScale.bandwidth())
  .on('mouseenter', function (actual, i) {
    d3.selectAll('.value')
      .attr('opacity', 0)

    d3.select(this)
      .transition()
      .duration(300)
      .attr('opacity', 0.6)
      .attr('x', (a) => xScale(a["Age Group"]) - 5)
      .attr('width', xScale.bandwidth() + 10)

    const y = yScale(actual["Total"])

    line = chart.append('line')
      .attr('id', 'limit')
      .attr('x1', 0)
      .attr('y1', y)
      .attr('x2', width)
      .attr('y2', y)

    barGroups.append('text')
      .attr('class', 'divergence')
      .attr('x', (a) => xScale(a["Age Group"]) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a["Total"]) - 10)
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .text((a, idx) => {
        const divergence = (a["Total"] - actual["Total"]).toFixed(1)

        let text = ''
        if (divergence > 0) text += '+'
        text += `${divergence}%`

        return idx !== i ? text : '';
      })

  })
  .on('mouseleave', function () {
    d3.selectAll('.value')
      .attr('opacity', 1)

    d3.select(this)
      .transition()
      .duration(300)
      .attr('opacity', 1)
      .attr('x', (a) => xScale(a["Age Group"]))
      .attr('width', xScale.bandwidth())

    chart.selectAll('#limit').remove()
    chart.selectAll('.divergence').remove()
  })

barGroups 
  .append('text')
  .attr('class', 'value')
  .attr('x', (a) => xScale(a["Age Group"]) + xScale.bandwidth() / 2)
  .attr('y', (a) => yScale(a["Total"]) - 15)
  .attr('text-anchor', 'middle')
  .text((a) => `${a["Total"].toFixed(2)}`)

svg
  .append('text')
  .attr('class', 'label')
  .attr('x', -(height / 2) - margin)
  .attr('y', margin / 2.40) 
  .attr('transform', 'rotate(-90)')
  .attr('text-anchor', 'middle')
  .text('Number of Deportations (in 100,000s)')

svg.append('text')
  .attr('class', 'label')
  .attr('x', width / 2 + margin)
  .attr('y', height + margin * 1.7)
  .attr('text-anchor', 'middle')
  .text('Age Groups')

svg.append('text')
  .attr('class', 'title')
  .attr('x', width / 2 + margin)
  .attr('y', 40)
  .attr('text-anchor', 'middle')
  .text('Deportation Age Demographics')

svg.append('text')
  .attr('class', 'source')
  .attr('x', width - margin / 2)
  .attr('y', height + margin * 1.7)
  .attr('text-anchor', 'start')
  .text('Source: trac.syr.edu/immigration/')

