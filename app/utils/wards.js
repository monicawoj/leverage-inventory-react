// import { variance } from 'd3-array';

const wards = (a, b, accessor) => {
  const x = accessor ? a.map(accessor) : a;
  const y = accessor ? b.map(accessor) : b;
  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    distance += (x[i] - y[i]) * (x[i] - y[i]);
  }
  // Between two singleton objects this quantity = squared euclidean distance / 2
  return distance;
};

export default wards;
