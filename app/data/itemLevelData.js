const itemLevelData = [];

for (let i = 0; i < 60; i++) {
  const factors = [
    'Networks',
    'Team-building',
    'Exchange',
    'Allocentrism',
    'Sit. Awareness',
    'Agency',
    'Intentionality',
    'Logos',
    'Might',
    'Ethos',
    'Coalitions',
    'Pathos'
  ];
  const randomFactor = factors[Math.floor(Math.random() * factors.length)];
  const randomInteger = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
  const randomNumber = (min, max) => (Math.random() * (max - min)) + min;

  itemLevelData.push({
    surveyItem: {
      i,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ratione porro natus incidunt?'
    },
    factor: randomFactor,
    avgRating: randomNumber(1, 4),
    selfRating: randomInteger(1, 4),
    bias: randomNumber(-1, 1),
    classMean: randomNumber(1, 4),
    classStdev: randomNumber(0, 0.5),
    zScore: randomNumber(-1, 1)
  });
}

export default itemLevelData;
