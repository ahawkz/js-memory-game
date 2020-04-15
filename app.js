document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]


  const grid = document.querySelector('.grid');

  //create game board
  function createBoard(){
    // loop through card array
    for (let i = 0; i < cardArray.length; i++) {
      // each card create an image element called card
      var card = document.createElement('img');
      // each card set as an attr linking it to the image
      card.setAttribute('src', 'images/blank.png');
      // give each card a data id and loop over each one and give them a data id from 0 -11
      card.setAttribute('data-id', i);
      // add event listener to see if the cards have been clicked on, and invoke a flipcard function
      // card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

});
