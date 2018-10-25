import React from 'react';
import hcluster from 'hclusterjs';
import { select } from 'd3-selection';
import { cluster, hierarchy } from 'd3-hierarchy';
// import math from 'mathjs';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10, schemeAccent, schemeDark2, interpolateSpectral, interpolateRainbow } from 'd3-scale-chromatic';
import { extent } from 'd3-array';
import { Tooltip, ResponsiveWrapper, CenteredText, Legend, CenteredSvg } from 'components/D3Components';

const Dendrogram = ({ svgId, parentWidth }) => {

  const distinctColors = [...schemeCategory10, ...schemeAccent, ...schemeDark2];
  console.log(distinctColors);

  const margin = {
    top: 30,
    right: 30,
    bottom: 50,
    left: 80
  };

  const svgDimensions = {
    width: Math.min(parentWidth, 700),
    height: 1000
  };

  const width = svgDimensions.width - margin.right - margin.left;
  const height = svgDimensions.height - margin.top - margin.bottom;

  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  function nextLetter(s) {
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a) {
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
  }

  const data = [];
  let name = 'A';
  for (let i = 0; i < 40; i++) {
    const position = [];
    for (let j = 1; j <= 12; j++) {
      const factor = getRandomNum(1, 4);
      position.push(factor);
    }
    data.push({
      name,
      position
    })
    name = nextLetter(name);
  }

  const studentCluster = hcluster()
    .distance('wards') // support for 'euclidean' and 'angular'
    .linkage('avg') // support for 'avg', 'max' and 'min'
    .posKey('position')
    .data(data);

  const root = hierarchy(studentCluster.tree());

  const d3Cluster = cluster()
    .size([height, width]);

  // const diagonal = (d) => {
  //   return "M" + d.target.y + "," + d.target.x
  //     + "C" + (d.source.y + 100) + "," + d.target.x
  //     + " " + (d.source.y + 100) + "," + d.source.x
  //     + " " + d.source.y + "," + d.source.x;
  // };

  const squareLinkPath = (d) => {
    return `M${d.source.y} ${d.source.x} V${d.target.x} H${d.target.y}`;
  };

  d3Cluster(root);

  const nodesData = root.descendants();
  const dissimilarityExtent = extent(nodesData, (d) => d.data.height);
  const x = scaleLinear()
    .domain(dissimilarityExtent.reverse())
    .range([width, 0]);

  nodesData.forEach((d) => d.y = x(d.data.height));
  console.log(nodesData);
  const linksData = root.links();
  console.log(linksData);

  //color scale
  const parentNodes = nodesData.map((d, i) => {
    return d.parent ? d.parent.data.name : null;
  }).filter((v, i, a) => a.indexOf(v) === i);
  const colorsForScale = parentNodes.map((d, i, a) => interpolateSpectral(i / a.length));
  // const colorScale = scaleOrdinal(distinctColors).domain(parentNodes);
  const colorScale = scaleOrdinal(colorsForScale).domain(parentNodes);

  const links = linksData.map((d, i) => (
    <path
      key={i}
      className="link"
      d={squareLinkPath(d)}
      // d={diagonal(d)}
      stroke={d.target.children ? '#111' : colorScale(d.source ? d.source.data.name : null)}
      strokeOpacity={0.5}
      strokeWidth="2px"
      fill="none"
    />
  ));

  const nodes = nodesData.map((d, i) => {
    return (<g
      key={i}
      className="node"
      transform={`translate(${d.y},${d.x})`}
    >
      <circle
        r={d.children ? 1 : 6}
        // fill={`hsl(${50},${50}%,50%)`}
        fill={colorScale(d.parent ? d.parent.data.name : null)}
      />
      <text
        x={-10}
        dy={4}
        textAnchor="end"
        fill="black"
      >
        { d.data.children ? '' : `${d.data.name}tralala` }
      </text>
    </g>);
  });

  return (
    <section className="">
      <CenteredSvg
        id={svgId}
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <g className="axis axis--x">
          <g
            transform={`translate(${margin.left}, ${height + margin.top})`}
            ref={(node) => {
              select(node).call(
                axisBottom(x)
              );
            }}
          />
        </g>
        <CenteredText
          className="label"
          y={height + margin.bottom }
          x={svgDimensions.width / 2}
          dy="1em"
        >
          Dissimilarity (Euclidean distance (squared) between clusters)
        </CenteredText>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          { links }
          { nodes }
        </g>
      </CenteredSvg>
    </section>
  );
};

export default ResponsiveWrapper(Dendrogram);
