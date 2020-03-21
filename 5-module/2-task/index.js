/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
   
  this.el = document.createElement('table');
  let thead = document.createElement('thead');
  let rowHead = document.createElement('tr');

  function createHead (data) {
    let cellHead = document.createElement('td');
    cellHead.innerHTML= data;
    rowHead.appendChild(cellHead);
    thead.appendChild(rowHead);
  }

  createHead('Name');
  createHead('Age');
  createHead('Salary');
  createHead('City');

  this.el.appendChild(thead);


  let tbody = document.createElement("tbody");

    for (obj of items) {
      let row = document.createElement('tr');
        for (prop in obj){
          let cell = document.createElement('td');
          cell.innerHTML=obj[prop];
          row.appendChild(cell);
        }

      tbody.appendChild(row);
    }
  this.el.appendChild(tbody);
   

  this.sort = (column, desc = false) => {
    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (column) {
      case 0:
        compare = function(rowA, rowB) {
          return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
        }
        rowsArray.sort(compare);
        if (desc) {
          rowsArray.reverse(compare);
        }
        break;
      case 2:
        compare = function(rowA, rowB) {
          return rowA.cells[column].innerHTML - rowB.cells[column].innerHTML;
        };
        rowsArray.sort(compare);
        break;
    }

    tbody.append(...rowsArray);
  }
}