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

const highlightField = document.getElementById('highlightField');
const nameField_1 = document.getElementById('nameField_1');
const nameField_2 = document.getElementById('nameField_2');
const nameField_3 = document.getElementById('nameField_3');
const nameErrorMessage_1 = document.getElementById('nameError_1');
const nameErrorMessage_2 = document.getElementById('nameError_2');
const nameErrorMessage_3 = document.getElementById('nameError_3');
const consentErrorMessage = document.getElementById('consentError');
const consentText = document.getElementById('consentText');

nameField_1.addEventListener('click', function() {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_1.style.display = 'block';
});

nameField_2.addEventListener('click', function() {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_2.style.display = 'block';
});

nameField_3.addEventListener('click', function() {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_3.style.display = 'block';
});

// nameField_1.addEventListener('click', nameField_1);
// nameField_2.addEventListener('click', nameField_2);
// nameField_3.addEventListener('click', nameField_3);

function checkAllFieldsClicked() {
  return nameField_1.style.borderColor === '#EC1211' &&
    nameField_2.style.borderColor === '#EC1211' &&
    nameField_3.style.borderColor === '#EC1211';
}

function giveAnErrorMessage() {
  this.style.borderColor = '#EC1211';
  if (checkAllFieldsClicked()) {
    consentErrorMessage.style.display = 'block';
  }
}

// closeButton.addEventListener('click', function() {
//   // Сброс состояния всех полей
//   nameField.style.borderColor = '#F1F1F1';
//   emailField.style.borderColor = '#F1F1F1';
//   phoneField.style.borderColor = '#F1F1F1';
//   consentErrorMessage.style.display = 'none';
// });

