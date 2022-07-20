var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
    // console.log(document.getElementById("text").innerHTML);
}

setTimeout(() => {
    document.getElementById("text").innerHTML = ''
    typeWriter();

}, 300)


window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: '30px' });
sr.reveal('.slogan', { duration: 3000, origin: 'left' })
sr.reveal('.section-titulo', { duration: 3000, origin: 'bottom' })
sr.reveal('.vem-esquerda', { duration: 3000, origin: 'left' })
sr.reveal('.vem-direita', { duration: 3000, origin: 'right' })
sr.reveal('.vem-baixo', { duration: 3000, origin: 'bottom' })



/* Code for changing active 
    link on clicking */
var btns =
    $(".navigation li");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function () {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
}

/* Code for changing active 
link on Scrolling */
$(window).scroll(function () {
    var distance = $(window).scrollTop();
    $('.page-section').each(function (i) {
        console.log(distance)
        if ($(this).position().top
            <= distance + 450) {

            $('.navigation li.active')
                .removeClass('active');

            $('.navigation li').eq(i)
                .addClass('active');
        }
    });
}).scroll();