/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '25,-1,-234,4,   1000';

function getMinMax(str) {
    let arr = str.match(/-?\d+(\.\d+)?/g);

    let maxElement = +arr[0];
    for (let el of arr) {
      if (maxElement < +el) {
        maxElement = el;
      }
    }

    let minElement = +arr[0];
    for (let el of arr) {
      if (minElement > +el) {
        minElement = el;
      }
    }

    let result = {
      min: +minElement,
      max: +maxElement
    }
    return result;
}

console.log(getMinMax(inputData));

inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData));
