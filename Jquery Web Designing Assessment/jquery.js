$(function () {
  let currentSlide = 0;
  let slides = $(".slide");
  let circles = $(".circle");

  $.fn.showSlide = function (index) {
    circles.removeClass("active-circle");
    slides.removeClass("active");

    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    $(slides[currentSlide]).addClass("active");
    $(circles[currentSlide]).addClass("active-circle");
  };

  $.fn.nextSlide = function () {
    this.showSlide(currentSlide + 1);
  };

  $.fn.prevSlide = function () {
    this.showSlide(currentSlide - 1);
  };

  $.fn.showSlide(currentSlide);

  setInterval(function () {
    $(slides).nextSlide();
  }, 3000);
});
