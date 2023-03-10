export default class Card { // класс для создания 2-х карточек с одинаковыми свойствами
  _open = false; // открыта карточка или нет
  _success = false; // нашла пару или нет

  constructor(container, number, action) {
    this.card = document.createElement('div'); // создаём div
    this.card.classList.add('card'); // добавляю класс для созданного элемента div
    this.card.textContent = number; // добавляю контент для созданного элемента div
    this.number = number;
    this.card.addEventListener('click', () => { // вешаем событие click
    if(this.open == false && this.success == false) { // если карточка была закрыта и каточка была выбрана, то тогда карточку выбрать больше не можем
      this.open = true; // open меняем на true, карточка открыта
      action(this); //
    }
  });
  container.append(this.card); // куда именно добавлять карточку
  }
 
  set open(value) {
    this._open = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open');
  }
  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success');
  }
  get success() {
    return this._open;
  }
}

// // кулбэк-функция
// function flip(card) {
//   console.log(card);
// }