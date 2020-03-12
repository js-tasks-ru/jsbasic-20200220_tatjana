/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let newArr = [];
  for (let key of arr) {
    if (key >= a && key <= b) {
      newArr = newArr.concat(key);
    }
  }
  return newArr;
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)