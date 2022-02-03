/* ОСНОВНОЕ МЕНЮ НАВИГАЦИИ */
const navButton = document.querySelector('.usernav__btn');
const userNav = document.querySelector('.usernav__list');

const toggleUserNav = () => {
  navButton.classList.toggle('usernav__btn--close');
  userNav.classList.toggle('usernav--shown');
};

navButton.addEventListener('click', toggleUserNav());

/* СПИСОК ЧАТОВ */
const chatListButton = document.querySelector('.messages__open-chat-btn');
const chatList = document.querySelector('.messages__list-contacts');
const chatLinks = document.querySelectorAll('.messages-list-link');

// функция add --shown при нажатии на chatListButton
// функция remove class --shown
// eventListener на нажатие по одному из чатов
// eventListener на нажатие по доступной области уже открытого чата
// нужна ли вторая кнопка - закрыть окно поиска чатов
// добавить поле поиска по списку чатов
