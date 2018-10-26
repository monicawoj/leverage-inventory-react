export function svgRotate(a) {
  return `rotate(${+a})`;
}

export function svgTranslate(x, y) {
  return `translate(${+x},${+y})`;
}

export const matchColor = (factor, colorType = 'normal') => {
  let colors = {
    blue: '#62c97c',
    red: '#c96962',
    green: '#6294c9'
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
