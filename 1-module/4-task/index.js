/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let string = str.toUpperCase();
    if ((string.includes("1XBET")) || (string.includes("XXX"))) {
        return true;
    } else {
        return false;
    }
}
