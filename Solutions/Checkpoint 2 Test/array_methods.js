const useMapToUpperCase = str => {
  return str.split(' ').map(word => {
    return word.toUpperCase();
  });
};

const useFilter = arr => {
  return arr.filter(word => {
    return word.includes('@');
  });
};

const sumWithReduce = (arr, start = 0) => {
  return arr.reduce((accum, num) => {
    return accum + num;
  }, start);
};

const filterEvensDoubleAndSum = arr => {
  return arr
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((accum, num) => accum + num);
};