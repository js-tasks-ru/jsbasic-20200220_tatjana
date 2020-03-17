/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    for (let i = 0; i < 5; i++) {
        let cell = table.rows[i].cells[i];
        cell.style.backgroundColor = 'red';
    }
}
