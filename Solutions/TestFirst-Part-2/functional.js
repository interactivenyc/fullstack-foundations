const doubler = n => n * 2;

const forEach = (array, iteratorFunc) => {
  for (let i = 0; i < array.length; i++) {
    iteratorFunc(i);
  }
};

const map = (array, iteratorFunc) => {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(iteratorFunc(array[i]));
  }
  return returnArray;
};

const filter = (array, filterFunc) => {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (filterFunc(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};

const includes = (collection, searchVal) => {
  for (key in collection) {
    if (collection.hasOwnProperty(key)) {
      if (collection[key] === searchVal) {
        return true;
      }
    }
  }
  return false;
};

const countWords = (currentVal, sentence) =>
  currentVal + sentence.split(' ').length;

const reduce = (array, startVal, combinerFunc) => {
  let value = startVal;
  array.forEach(index => {
    value = combinerFunc(value, index);
  });
  return value;
};

const sum = array => {
  const adder = (currentSum, nextVal) => currentSum + nextVal;
  return reduce(array, 0, adder);
};

const every = (array, checkerFunc) => {
  const everyIterator = (currentVal, nextVal) =>
    currentVal && checkerFunc(nextVal);
  return reduce(array, true, everyIterator);
};

const any = (array, checkerFunc) => {
  const anyIterator = (currentVal, nextVal) =>
    currentVal || checkerFunc(nextVal);

  return reduce(array, false, anyIterator);
};
