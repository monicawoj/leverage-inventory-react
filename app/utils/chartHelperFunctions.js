export function svgRotate(a) {
  return `rotate(${+a})`;
}

export function svgTranslate(x, y) {
  return `translate(${+x},${+y})`;
}

/* Arc functions */
export const outerRadius = (d, i) => {
    return barScale(d);
}
export const startAngle = (d, i) => {
    return (i * 2 * Math.PI) / numBars;
}
export const endAngle = (d, i) => {
    return ((i + 1) * 2 * Math.PI) / numBars;
}
