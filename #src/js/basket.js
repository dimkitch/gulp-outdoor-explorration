document.addEventListener('DOMContentLoaded', () => {
  let btnAddToBasket = document.querySelector('.js-add-to-basket')
  let counterBasket = document.querySelector('.js-basket-counter')
  let counter = 0

  if (btnAddToBasket) {
    btnAddToBasket.addEventListener('click', function () {
      counter = counter + 1
      counterBasket.textContent = counter
      console.log(counterBasket)
    })
  }
  //  else {
  //   alert('Такого html эл-та по заданному селектору не было найдено!')
  // }
})
// DOM
// window OR document
