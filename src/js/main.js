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

$(document).ready(function() {
    // Runs on page load
// $('.scroller').click(function(){
//     scroller();
// });
});
