/* var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400);

var rect = svg.append("rect").attr("x", 100).attr("y", 100).attr("width", 70).attr("height", 100).attr("fill", "blue");

var ellipse = svg.append("ellipse").attr("cx", 100).attr("cy", 100).attr("rx", 70).attr("ry", 100).attr("fill", "red");

var cir = svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 70).attr("r", 100).attr("fill", "blue");

var line = svg.append("line")
  .attr("x1", 5)
  .attr("y1", 5)
  .attr("x2", 50)
  .attr("y2", 50)
  .attr("stroke-width", 2)
  .attr("stroke", "black");


mycolor = d3.lab(52, -4, -32);  // Lab color space (l, a, b); steelblue

d3.select("#SC30header").style("color", mycolor);

<div style="width: 264px;">26.4</div>
<div style="width: 253px;">25.3</div>
<div style="width: 301px;">30.1</div>
<div style="width: 238px;">23.8</div>
<div style="width: 240px;">24.0</div>

*/

// var svg = d3.select("#netWorth").append("svg")
//   .attr("width", 500)
//   .attr("height", 400);
//
// var cir = svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 70).attr("r", 100).attr("fill", "blue");


//javascript

//players[14][1]+ " is averaging " + players[14][29] + " points per game, " + players[14][21] + " rebounds per game, and " + players[14][22] + " assists per game."

/* Players:

Players is the array of player data from the NBA Stat Page for the Golden State Warriors

If let data = entire data set hash (gsw2017-18.json), to index players,

data.resultSets[0].rowSet[15] accesses Steph player data for 2017-18 NBA season

players = data.resultSets[0].rowSet;

notable headers:

1: PLAYER_NAME
3: TEAM_ABBREVIATION
21: Rebounds
22: Assists
24: Steals
25: Blocks
29: Points
30: Plus-Minus

Player Arrangement

0: Andre Iguodala
1: Chris Boucher
2: Damian Jones
3: David West
4: Draymond Green
5: JaVale McGee
6: Jordan Bell
7: Kevin Durant
8: Kevon Looney
9: Klay Thompson
10: Nick Young
11: Omri Casspi
12: Patrick McCaw
13: Quinn Cook
14: Shaun Livingston
15: Stephen Curry
16: Zaza Pachulia


Pie Chart with Players
1. Stephen Curry
2. Kevin Durant
3. Klay Thompson
4. Draymond Green
5. Quinn Cook

<link rel="shortcut icon" href="./favicon.ico" />

let players;
let headers;
let games = 0;
let ppg = 0;
let rpg = 0;
let apg = 0;

d3.json("lib/gsw2017-18.json").then(function(data){
  players = data.resultSets[0].rowSet;
  headers = data.resultSets[0].headers;
  console.log(data.resultSets[0].rowSet[15]);
});

-----------



//
// var height = 280;
// var width = 600;
// var barWidth = 35;
// var barOffset = 5;
// var animateDuration = 700;
// var animationDelay = 30;
//
//
//
// var tooltip = d3.select('body').append('div')
//   .style('position', 'absolute')
//   .style('background', '#f4f4f4')
//   .style('padding', '5 15px')
//   .style('border', '1px #333 solid')
//   .style('border-radius','5px')
//   .style('opacity','0');
//
//
// var colors = d3.scaleLinear()
//   .domain([0, gameData.length])
//   .range(["#60AFFE", "#104E8B"])
//
// export const seasonChart = d3.select("#trendLine").append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .selectAll("rect")
//     .data(gameData)
//     .enter().append("rect")
//       .attr("width", barWidth)
//       .attr("height", function(d){
//         return d.points*7;
//       })
//       .style("fill", function(d, i){
//         return colors(i);
//       })
//       .attr('x', function(d,i){
//         return i * (barWidth + barOffset);
//       })
//       .attr('y', height)
//       .on('mouseover', function(d){
//         tooltip.transition()
//           .style('opacity', 1)
//
//         tooltip.html(`${d.opp}: ${d.points}`)
//           .style('left', (d3.event.pageX)+'px')
//           .style('top', (d3.event.pageY)+'px')
//         d3.select(this).style('opacity', 0.5)
//       })
//       .on('mouseout', function(d){
//         tooltip.transition()
//           .style('opacity', 0)
//           d3.select(this).style('opacity', 1)
//       })
//
//       seasonChart.transition()
//         .attr('height', function(d){
//           return d.points*7;
//         })
//         .attr('y', function(d){
//           return height - d.points*7;
//         })
//         .duration(animateDuration)
//         .delay(function(d,i){
//           return i*animationDelay;
//         });
-----------------
scoringComp.js

// var data = [
//     {"year": "2017-18", "ppg": 26.4},
//     {"year": "2016-17", "ppg": 25.3},
//     {"year": "2015-16", "ppg": 30.1},
//     {"year": "2014-15", "ppg": 23.8},
//     {"year": "2013-14", "ppg": 24.0}
// ];
//
// var height = 280;
// var width = 700;
// var barWidth = 35;
// var barOffset = 5;
// var animateDuration = 700;
// var animationDelay = 30;
//
// var tooltip = d3.select('body').append('div')
//   .style('position', 'absolute')
//   .style('background', '#f4f4f4')
//   .style('padding', '5 15px')
//   .style('border', '1px #333 solid')
//   .style('border-radius','5px')
//   .style('opacity','0');
//
//
// var colors = d3.scaleLinear()
//   .domain([0,data.length])
//   .range(["#60AFFE", "#104E8B"])
//
// export const myChart = d3.select("#seasonComp").append("svg")
//   .attr("width", width)
//   .attr("height", height)
//   .selectAll("rect")
//     .data(data)
//     .enter().append("rect")
//       .attr("width", barWidth)
//       .attr("height", function(d){
//         return d.ppg*7;
//       })
//       .style("fill", function(d, i){
//         return colors(i);
//       })
//       .attr('x', function(d,i){
//         return i * (barWidth + barOffset);
//       })
//       .attr('y', height)
//       .on('mouseover', function(d){
//         tooltip.transition()
//           .style('opacity', 1)
//
//         tooltip.html(`${d.year}: ${d.ppg}`)
//           .style('left', (d3.event.pageX)+'px')
//           .style('top', (d3.event.pageY)+'px')
//         d3.select(this).style('opacity', 0.5)
//       })
//       .on('mouseout', function(d){
//         tooltip.transition()
//           .style('opacity', 0)
//           d3.select(this).style('opacity', 1)
//       })
//
//       myChart.transition()
//         .attr('height', function(d){
//           return d.ppg*7;
//         })
//         .attr('y', function(d){
//           return height - d.ppg*7;
//         })
//         .duration(animateDuration)
//         .delay(function(d,i){
//           return i*animationDelay;
//         });
=---------

// country, gdp

// export function myChart(){
//   var margin = {top: 20, right: 10, bottom: 100, left: 40},
//   width = 700 - margin.right - margin.left,
//   height = 400 - margin.top - margin.bottom;
//
//   var svg = d3.select("#seasonComp").append("svg")
//   .attr("width", width + margin.right + margin.left)
//   .attr("height", height+ margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.right + ")");
//
//   var xScale = d3.scaleOrdinal([0,width], 0.2, 0.2);
//   // .rangeRoundBands([0,width], 0.2, 0.2);
//
//   var yScale = d3.scaleLinear()
//   .range([height, 0]);
//
//
//   //define axis
//
//   var xAxis = d3.axisBottom(xScale);
//
//   var yAxis = d3.axisLeft(yScale);
//
//   d3.csv("lib/scoringComp.csv")
//   .then(function(data, error){
//     if (error) throw error;
//
//     data.forEach(function(d){
//       d.ppg = +d.ppg;
//       d.year = d.year;
//       console.log(d.ppg);
//     });
//
//     xScale.domain(data.map(function(d){return d.year;}));
//     yScale.domain([0, d3.max(data, function(d){return d.ppg;}) ] );
//
//     svg.selectAll('rect')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('x', function(d) {return xScale(d.year); })
//       .attr('y', function(d) {return yScale(d.ppg); })
//       .attr('width', xScale.bandwidth())
//       .attr('height',function(d) {return height - yScale(d.ppg); })
//   });
//
// }

*/
