/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.render();

    this.el.addEventListener('click', event => {
      const { target } = event;

      let id = +target.getAttribute('data-id');
      if (!id) return;
      
      let elem = target.closest('tr[data-tr]');
      elem.remove();
    
      this.onRemoved(id);
    });
  }

  render() {
    const list = this.data.map(item => `
        <tr data-tr="${item.id}">
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><a href="#delete" data-id="${item.id}">X</a></td>
        </tr>
    `).join('');

    this.el.innerHTML = `
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>City</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${list}
      </tbody>
    `
  }

  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
