let openButtons = document.querySelectorAll('.button, .button_header');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close');
const nameField_1 = document.getElementById('nameField_1');
const nameField_2 = document.getElementById('nameField_2');
const nameField_3 = document.getElementById('nameField_3');
const nameErrorMessage_1 = document.getElementById('nameError_1');
const nameErrorMessage_2 = document.getElementById('nameError_2');
const nameErrorMessage_3 = document.getElementById('nameError_3');
const nameErrorMessage_4 = document.getElementById('nameError_4');

openButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    modal.style.display = "block";
  });
});

nameField_1.addEventListener('click', function () {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_1.style.display = 'block';
  checkIfAllFieldsClicked();
});

nameField_2.addEventListener('click', function () {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_2.style.display = 'block';
  checkIfAllFieldsClicked();
});

nameField_3.addEventListener('click', function () {
  this.style.borderColor = '#EC1211';
  nameErrorMessage_3.style.display = 'block';
  checkIfAllFieldsClicked();
});

function checkIfAllFieldsClicked() {
  if (nameField_1.style.borderColor === 'rgb(236, 18, 17)' &&
    nameField_2.style.borderColor === 'rgb(236, 18, 17)' &&
    nameField_3.style.borderColor === 'rgb(236, 18, 17)') {
    nameErrorMessage_4.style.display = 'block';
  }
}

closeButton.addEventListener('click', function () {
  modal.style.display = "none";
  nameField_1.style.borderColor = '#F1F1F1';
  nameField_2.style.borderColor = '#F1F1F1';
  nameField_3.style.borderColor = '#F1F1F1';
  nameErrorMessage_1.style.display = 'none';
  nameErrorMessage_2.style.display = 'none';
  nameErrorMessage_3.style.display = 'none';
  nameErrorMessage_4.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    nameField_1.style.borderColor = '#F1F1F1';
    nameField_2.style.borderColor = '#F1F1F1';
    nameField_3.style.borderColor = '#F1F1F1';
    nameErrorMessage_1.style.display = 'none';
    nameErrorMessage_2.style.display = 'none';
    nameErrorMessage_3.style.display = 'none';
    nameErrorMessage_4.style.display = 'none';
  }
});

window.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    nameField_1.style.borderColor = '#F1F1F1';
    nameField_2.style.borderColor = '#F1F1F1';
    nameField_3.style.borderColor = '#F1F1F1';
    nameErrorMessage_1.style.display = 'none';
    nameErrorMessage_2.style.display = 'none';
    nameErrorMessage_3.style.display = 'none';
    nameErrorMessage_4.style.display = 'none';
  }
});

