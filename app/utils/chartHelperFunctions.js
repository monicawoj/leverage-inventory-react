export function svgRotate(a) {
  return `rotate(${+a})`;
}

export function svgTranslate(x, y) {
  return `translate(${+x},${+y})`;
}

export const matchColor = (factor, colorType = 'normal') => {
  let colors = {
    blue: '#6294c9',
    red: '#c96962',
    green: '#62c97c'
  };
  if (colorType === 'deep') {
    colors = {
      blue: '#325faf',
      red: '#af4832',
      green: '#32af52'
    };
  }
  const colorsMap = {
    Networks: colors.blue,
    'Team-building': colors.blue,
    Exchange: colors.blue,
    Allocentrism: colors.blue,
    'Sit. Awareness': colors.green,
    Agency: colors.green,
    Intentionality: colors.green,
    Logos: colors.green,
    Might: colors.red,
    Ethos: colors.red,
    Coalitions: colors.blue,
    Pathos: colors.blue
  };
  return colorsMap[factor];
};

export const matchPowerType = (factor) => {
  const powerMap = {
    Networks: 'soft',
    'Team-building': 'soft',
    Exchange: 'soft',
    Allocentrism: 'soft',
    'Sit. Awareness': 'smart',
    Agency: 'smart',
    Intentionality: 'smart',
    Logos: 'smart',
    Might: 'hard',
    Ethos: 'hard',
    Coalitions: 'soft',
    Pathos: 'soft'
  };
  return powerMap[factor];
};
