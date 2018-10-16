import React from 'react';
import ScatterPlot from 'components/ScatterPlot';
import { saveSvgAsPng } from 'save-svg-as-png';
import groupLevelData from 'data/groupLevelData';

const saveToPng = (e) => {
  // console.log('resultsWithErrorBars');
  // console.log(e.target.parentElement);
  saveSvgAsPng(document.querySelector('#resultsWithErrorBars'), 'chart.png');
};

const ProfessorReportsPage = () => {
  const groupId = '619707';

  const scatterPlotProps = {
    groupData: groupLevelData,
    focusGroupId: groupId,
    errorBars: true
  };

  return (
    <div>
      <h1>Group-Level Results</h1>
      <ScatterPlot {...scatterPlotProps} />
      <button
        className="button"
        onClick={(e) => saveToPng(e)}
      >
        Save to PNG
      </button>
    </div>
  );
};

export default ProfessorReportsPage;
