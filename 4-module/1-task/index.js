/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let list = document.createElement('ul');

    for (let i = 0; i < friends.length; i++) {
        let item = document.createElement('li');
  
        item.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
       
        list.appendChild(item);
    }
    return list;
}
