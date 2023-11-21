// Получаем элементы нашей кнопки и модального окна
var openButton = document.querySelector('.button_header');
var modal = document.getElementById('modal');
var closeButton = document.querySelector('.close');

// Добавляем обработчик события на клик по кнопке
openButton.addEventListener('click', function() {
  modal.style.display = "block";
});

// Добавляем обработчик события на клик по кнопке закрытия модального окна
closeButton.addEventListener('click', function() {
  modal.style.display = "none";
});
