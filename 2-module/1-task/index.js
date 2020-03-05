/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
      let type = typeof(salaries[key]);
      if (type === 'number') {
        sum = sum + salaries[key];
      } 
    }
    return sum;
}
