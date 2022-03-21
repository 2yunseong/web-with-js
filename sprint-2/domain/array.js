Array.prototype.customReduce = function (callback, initialValue = 0) {
  let array = Object(this);

  if (isReturnSingleValueCondition(array, arguments.length)) return array[0];

  let { accumulator, currentValue, currentIndex } = initializeByHasInitialValue(
    arguments.length,
    initialValue,
    array
  );

  while (currentIndex !== array.length) {
    accumulator = callback(accumulator, currentValue);
    currentValue = array[++currentIndex];
  }

  return accumulator;
};

function initializeByHasInitialValue(argsLength, initialValue, arr) {
  let accumulator;
  let currentValue;
  let currentIndex;

  if (argsLength === 2) {
    accumulator = initialValue;
    currentValue = arr[0];
    currentIndex = 0;
  }
  // initialValue 미제공
  else if (argsLength === 1) {
    accumulator = arr[0];
    currentValue = arr[0];
    currentIndex = 1;
  }

  return { accumulator, currentValue, currentIndex };
}

function isArrayHasOneElement(arr) {
  return arr.length === 1;
}

function isNotGiveInitialValue(argsLength) {
  return argsLength === 1;
}

function isReturnSingleValueCondition(array, argsLength) {
  return (
    (isArrayHasOneElement(array) && !isNotGiveInitialValue(argsLength)) ||
    (isArrayHasOneElement(array) && isNotGiveInitialValue(argsLength))
  );
}
module.exports = Array;
