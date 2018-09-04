const interleave = function() {
  const strs = Array.from(arguments);

  /* Finding longest string length using forEach */
  //var longestStringLength = 0;
  //
  //strs.forEach(function (str) {
  //    if (str.length > longestStringLength) {
  //        longestStringLength = str.length;
  //    }
  //});

  /* Finding longest string length using reduce */
  const longestStringLength = strs.reduce((longest, str) => {
    if (str.length > longest) {
      return str.length;
    } else {
      return longest;
    }
  }, 0);

  let interleavedString = '';

  for (let i = 0; i < longestStringLength; i++) {
    /* Nested for loop */
    //for (var j = 0; j < strs.length; j++) {
    //    if (strs[j][i]) {
    //        interleavedString += strs[j][i];
    //    }
    //}

    /* For each */
    strs.forEach(str => {
      if (str[i]) {
        interleavedString += str[i];
      }
    });
  }

  return interleavedString;
};




function interleave(arr1, arr2) {
  function combineAtIndicesHelper(arr1, arr2, acc) {
    let isDone = (arr1.length === 0 || arr2.length === 0);
  
    if (isDone) {
      if (arr1.length > 0) {
        return acc.concat(arr1);
      } else if (arr2.length > 0) {
        return acc.concat(arr2);
      } else {
        return acc;
      }
    } else {
      return combineAtIndicesHelper(arr1.slice(1), arr2.slice(1), acc.concat([arr1[0] + arr2[0]]));
    }
  }

  return combineAtIndicesHelper(arr1, arr2, []);
}