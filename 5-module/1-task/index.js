/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

   for (let i = 0, row; row = table.rows[i]; i++) {
      let cell = row.cells[3];
      if (cell.hasAttribute('data-available') == false) {
         row.setAttribute('hidden', true);
      } else if (cell.getAttribute('data-available') == 'true') {
         row.classList.add('available');
      } else {
         row.classList.add('unavailable');
      }
   }
    
   for (let i = 0, row; row = table.rows[i]; i++) {
      let cell = row.cells[2];
      if (cell.innerText == 'm') {
         row.classList.add('male');
      } else {
         row.classList.add('female');
      }
   }
    
    
   for (let i = 0, row; row = table.rows[i]; i++) {
      let cell = row.cells[1];
      if (+(cell.innerText) < 18) {
         row.style.textDecoration = 'line-through';
      } 
   }
}
