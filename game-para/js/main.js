import Card from './card.js';
let count = 8;
function newGame(container, cardsCount) {
  //создание поля
  let arr = []; // пустой массив для номеров карточек
  let cardsArray = []; // массив с карточками
  let firstCard = null;
  let secondCard = null;

  // Этап 1. Создание функции, генерирующей массив парных чисел.
  function createNumbersArray(count) {
    for(let i = 1; i <= count; i++) {
      arr.push(i); // создание пары
      arr.push(i); // карточек
    }
  }
  createNumbersArray(count);

  // Этап 2. Создаание функции перемешивающий массив.
  function shuffle(arr) {
    arr = arr.sort(() => Math.random() - 0.5); // перемешивание карточек
  }  
  shuffle(arr);

  // Этап 3. Созданные функции для массива с перемешанными номерами.
  function startGame(count) {
    for(const cardNumber of arr) {
      cardsArray.push(new Card(container, cardNumber, flip));
    }
  }
  startGame(count);
  
  // Логика
  function flip(card) {
    if(firstCard !== null && secondCard !== null) {
      // проверяем на то, что карточки не совпали, если карточки не совпали, то мы их сбрасываем и закрываем
      if(firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }
    // тут мы заполняем карточки
    if(firstCard == null) {
      firstCard = card;
    } else {
      if(secondCard == null) {
        secondCard = card;
      }
      // если карточки совпали, то мы их открываем и выделяем их зелёным
      if(firstCard !== null && secondCard !== null) {
        if(firstCard.number == secondCard.number) {
          firstCard.success = true;
          secondCard.success = true;
          firstCard = null;
          secondCard = null;
        }
      }
      // делаем сброс игры
      if(document.querySelectorAll('.card.success').length == arr.length) {
        alert('Победа!');
        container.innerHTML = '';
        arr = [];
        cardsArray = [];
        firstCard = null;
        secondCard = null;
  
        newGame(container, cardsCount);
       }
    }    
  }
}

newGame(document.getElementById('game'), count);