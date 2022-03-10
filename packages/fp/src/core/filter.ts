const filter = (f: any, iter: any) => {
  const result = [];
  for (const el of iter) {
    if (f(el)) result.push(el);
  }
  return result;
}
export default filter;