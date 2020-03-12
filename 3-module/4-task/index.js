/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let arr = [];
    for (let key of users) {
      arr = arr.concat(key['name']);
    }
    return arr;
}
