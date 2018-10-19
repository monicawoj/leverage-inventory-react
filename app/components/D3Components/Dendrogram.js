import React from 'react';
import clusterfck from 'utils/clusterfck/lib/clusterfck';
import convertClustersToD3 from 'utils/convertClustersToD3';
import { cluster, hierarchy } from 'd3-hierarchy';
import { scaleLinear, scaleBand } from 'd3-scale';
import { extent } from 'd3-array';
import { linkHorizontal } from 'd3-shape';
import { Tooltip, ResponsiveWrapper, CenteredText, Legend, CenteredSvg } from 'components/D3Components';

const Dendrogram = ({ svgId, parentWidth }) => {
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
  for (let i = 0; i < 20; i++) {
    const factor1 = getRandomNum(1, 4);
    const factor2 = getRandomNum(1, 4);
    const factor3 = getRandomNum(1, 4);
    data.push({
      name,
      position: [factor1, factor2, factor3]
    })
    name = nextLetter(name);
  }

  const getNameFromValue = (array) => (
    data.find((elem) => elem.position === array).name
  );

  const dataForClustering = data.map((item) => item.position);
  const rootData = convertClustersToD3(clusterfck.hcluster(dataForClustering));
  const clusterRoot = hierarchy(rootData);
  console.log(clusterRoot);

  const margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

  const svgDimensions = {
    width: Math.min(parentWidth, 1200),
    height: 1000
  };

  const d3Cluster = cluster()
    .size([svgDimensions.height - margin.top - margin.bottom, svgDimensions.width - margin.right - margin.left]);

  const diagonal = (d) => {
    return "M" + d.y + "," + d.x
      + "C" + (d.parent.y + 100) + "," + d.x
      + " " + (d.parent.y + 100) + "," + d.parent.x
      + " " + d.parent.y + "," + d.parent.x;
  };

  d3Cluster(clusterRoot);
  const nodesData = clusterRoot.descendants();
  console.log(nodesData);
  const linksData = clusterRoot.descendants().slice(1);

  const links = linksData.map((d, i) => (
    <path
      key={i}
      className="link"
      d={diagonal(d)}
      stroke="#555"
      strokeOpacity={0.4}
      strokeWidth="1.5px"
      fill="none"
    />
  ));

  const nodes = nodesData.map((d, i) => {
    console.log(d.data.value);

    return (<g
      key={i}
      className="node"
      transform={`translate(${d.y},${d.x})`}
    >
      <circle
        r={d.children ? 0 : 4}
      />
      <text
        x={8}
        dy={3}
        fill='black'
        // stroke='black'
      >
        { d.data.value ? getNameFromValue(d.data.value) : '' }
      </text>
    </g>);
  });

  return (
    <section className="">
      <div>test dendrogram section</div>
      <CenteredSvg
        id={svgId}
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          { links }
          { nodes }
        </g>
      </CenteredSvg>
    </section>
  );
};

export default ResponsiveWrapper(Dendrogram);
