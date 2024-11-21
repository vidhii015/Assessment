// It ensures that the code inside this function runs ONLY after the HTML document is fully loaded and ready.
$(function () {
  let currentSlide = 0;
  let slides = $(".slide");
  let circles = $(".circle");

  // function to show a specific slide based on the index
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

    // Add the 'active' class to the current slide to make it visible
    $(slides[currentSlide]).addClass("active");
    // Add the 'active-circle' class to the navigation dot (circle) that corresponds to the currently active slide
    $(circles[currentSlide]).addClass("active-circle");
  };

  // function to move to the next slide
  $.fn.nextSlide = function () {
    this.showSlide(currentSlide + 1);
  };

  // function to move to the previous slide
  $.fn.prevSlide = function () {
    this.showSlide(currentSlide - 1);
  };

  // Initially show the first slide (currentSlide = 0)
  $.fn.showSlide(currentSlide);

  // Set up an interval to automatically move to the next slide every 3 seconds (3000ms)
  setInterval(function () {
    $(slides).nextSlide();
  }, 3000);
});
