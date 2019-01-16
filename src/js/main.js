$(document).ready(function(){
    // Scroll function only works on index.html
    if(window.location.pathname == '/src/index.html'){
    // Scroll to function
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 400, 'linear');
    });
}
});