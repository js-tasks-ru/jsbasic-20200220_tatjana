/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let arr = str.split('-');
    let removed = arr.splice(0,1);

    arr = arr.map(function(el) {
        let modified = el[0].toUpperCase()+el.slice(1);
        return modified;
    });

    const resArr = removed.concat(arr);

    const resString = resArr.join('');
    return resString;
}
