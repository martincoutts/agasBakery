function arrowFadeIn() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800 && windowWidth > 991) {
      $(".arrow-button").fadeIn(500);
    } else {
      $(".arrow-button").fadeOut(200);
    }
  });
}

let windowWidth = window.innerWidth;

$(window).resize(function() {
  windowWidth = window.innerWidth;
});

arrowFadeIn();
