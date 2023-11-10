function Slider(container) {
  this.container = container;
  this.slides = Array.from(container.querySelectorAll('.slide'));
  this.current = 0;
  this.interval = null;

  this.next = function () {
    this.slides[this.current].classList.remove('active');
    this.current = (this.current + 1) % this.slides.length;
    this.slides[this.current].classList.add('active');
    this.updateDots();
  };

  this.prev = function () {
    this.slides[this.current].classList.remove('active');
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this.slides[this.current].classList.add('active');
    this.updateDots();
  };

  this.updateDots = function () {
  };

  this.enableControls = function () {
  };

  this.enableDots = function () {
  };

  this.init = function () {
    this.enableControls();
    this.enableDots();
  };

  this.init();
}

new Slider(document.querySelector('.slider-container'));
