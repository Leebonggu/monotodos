const map = (f: (arg0: any) => any, iter: any) => {
  const result = [];
  for (const el of iter) {
    result.push(f(el))
  }
  return result;
};

export default map;