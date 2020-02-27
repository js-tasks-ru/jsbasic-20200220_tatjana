/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (Boolean(str)) {
        return (str[0].toUpperCase()+str.slice(1));
    } else {
        return("");
    }
}
