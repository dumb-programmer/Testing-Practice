function analyzeArray(array) {
  const sum = array.reduce((prev, curr) => {
    return prev += curr;
  }, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}

module.exports = analyzeArray;
