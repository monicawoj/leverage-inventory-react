import React from 'react';
import ScatterPlot from 'components/ScatterPlot';
import { saveSvgAsPng } from 'save-svg-as-png';
import groupLevelData from 'data/groupLevelData';
import Dendrogram from 'components/D3Components';

const saveToPng = (e) => {

  saveSvgAsPng(document.querySelector('#multiGroupResults'), 'groupResultsVersusOthers.png', { backgroundColor: 'white' });
};

const PngButton = ({ svgId, filename }) => (
  <div className="columns is-centered">
    <div className="column is-12">
      <button
        className="button is-info is-fullwidth"
        onClick={() => saveSvgAsPng(document.querySelector(`#${svgId}`), filename, { backgroundColor: 'white' })}
      >
        Save to PNG
      </button>
    </div>
  </div>
);

const ProfessorReportsPage = () => {
  const groupId = '619707';

  const scatterPlotProps = {
    groupData: groupLevelData,
    focusGroupId: groupId
  };

  return (
    <div>
      <div className="section has-text-centered">
        <h2 className="title">
          Group-Level Results
        </h2>
      </div>
      <div className="columns is-multiline">
        <div className="column is-half box">
          <ScatterPlot {...scatterPlotProps} errorBars svgId="focusGroupResults" />
          <PngButton svgId="focusGroupResults" filename="groupResultsWithPercentiles.png" />
        </div>
        <div className="column is-half box">
          <ScatterPlot {...scatterPlotProps} svgId="multiGroupResults" />
          <PngButton svgId="multiGroupResults" filename="multiGroupResults.png" />
        </div>
        <div className="column">
          <Dendrogram svgId="dendrogram" />
        </div>
      </div>
    </div>
  );
};

export default ProfessorReportsPage;
