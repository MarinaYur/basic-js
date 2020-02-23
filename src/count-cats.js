module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.reduce((total, item) => total.concat(item),[]).forEach(item => {
    if (item === '^^') {
      counter += 1;
    }
  })
  return counter;
  // throw 'Not implemented';
};
