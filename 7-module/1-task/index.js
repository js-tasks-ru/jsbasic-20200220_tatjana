/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

let button = document.createElement('button');

function promiseClick(button) {
  return new Promise (function(resolve, reject) {
    button.addEventListener('click', (event) => { 
      resolve(event);
    });
  }, { once: true });
}

promiseClick(button).then((event) => console.log(event));