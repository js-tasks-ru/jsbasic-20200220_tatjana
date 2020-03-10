/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = ``;
    for (let key of data) {
      if (key['age'] <= age) {
        str += `${key['name']}, ${key['balance']}\n`;
      } 
    }
    return(str.slice(0,-1));
}
