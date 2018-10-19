const convert = (input, rootName = 'root') => {
  // top level
  if (Array.isArray(input)) {
    return {
      'name': rootName,
      children: input.map(convert)
    };
  }

  ['left', 'right'].forEach((side) => {
    if (input[side]) {
      input.children = input.children || [];
      input.children.push(convert(input[side]));
      delete input[side];
    }
  });
  return input;
};

export default convert;
