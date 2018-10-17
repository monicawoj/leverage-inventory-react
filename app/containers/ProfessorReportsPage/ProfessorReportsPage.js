import React from 'react';
import ScatterPlot from 'components/ScatterPlot';
import { saveSvgAsPng } from 'save-svg-as-png';
import groupLevelData from 'data/groupLevelData';

const saveToPng = (e) => {
  // console.log('resultsWithErrorBars');
  console.log(e.target.parentElement);
  saveSvgAsPng(document.querySelector('#focusGroupResults'), 'groupResultsWithPercentiles.png', { backgroundColor: 'white' });
  saveSvgAsPng(document.querySelector('#multiGroupResults'), 'groupResultsVersusOthers.png', { backgroundColor: 'white' });
};

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
        <p>
          <button
            className="button"
            onClick={(e) => saveToPng(e)}
          >
            Save to PNG
          </button>
        </p>
      </div>
      <div className="columns is-multiline">
        <div className="column is-half">
          <ScatterPlot {...scatterPlotProps} errorBars svgId='focusGroupResults' />

        </div>
        <div className="column is-half">
          <ScatterPlot {...scatterPlotProps} svgId='multiGroupResults' />
        </div>
      </div>
    </div>
  );
};

export default ProfessorReportsPage;
