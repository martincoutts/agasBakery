function scroller() {
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      400,
      "linear"
    );
  });
}

const desktopView = false;

$(window).resize(function(){
  if($(window).width() >= 992){
    desktopView === true;
  }else{
    desktopView === false;
  }
});

$(document).ready(function() {
  
  // Arrow button fade in
  if($(window).width() >= 992){
    desktopView === true;
  }
  if(desktopView === true){
  $(document).on('scroll', function() {
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 800) {
        $('.arrow-button').fadeIn(500);
      } else {
        $('.arrow-button').fadeOut(200);
      }
    });
})
  }
});
