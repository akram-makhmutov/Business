let openButtons = document.querySelectorAll('.button, .button_header');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close');

openButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.style.display = "block";
  });
});

closeButton.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
