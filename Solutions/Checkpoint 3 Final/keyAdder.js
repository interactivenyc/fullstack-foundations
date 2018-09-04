function keyAdder() {
  return Object.values(this)
    .filter(num => {
      return typeof num === 'number';
    })
    .reduce((accum, curr) => {
      return accum + curr;
    }, 0);
}