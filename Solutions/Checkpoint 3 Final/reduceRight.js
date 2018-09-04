const reduceRight = (collection, initialValue, iterator) => {
  let accumulatedValue = initialValue;

  /* Backwards for loop */
  //for (var i = collection.length - 1; i >= 0; i--) {
  //    accumulatedValue = iterator(accumulatedValue, collection[i]);
  //}

  let copiedCollection = collection.slice(0);

  copiedCollection.reverse();

  copiedCollection.forEach(function(element) {
    accumulatedValue = iterator(accumulatedValue, element);
  });

  return accumulatedValue;
};

function reduceRightRecursive(collection, accumulatedValue, iterator) {
  // Base case
  if (collection.length === 0) {
    return accumulatedValue;
  }

  let pertinentElement = collection[collection.length - 1];
  let result = iterator(accumulatedValue, pertinentElement);

  return reduceRightRecursive(
    collection.slice(0, -1), // New copy of the same collection, but without last element, eventually becomes []
    result,
    iterator
  );
}