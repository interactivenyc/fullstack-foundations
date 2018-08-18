function difference(array, arrayTwo) {
  return array.filter(index => {
    if (!arrayTwo.includes(index)) {
      return index;
    }
  });
}

function symmetricDiff(array, arrayTwo) {
  const newArray = difference(array, arrayTwo);
  const newArray2 = difference(arrayTwo, array);

  return [...newArray, ...newArray2];
}