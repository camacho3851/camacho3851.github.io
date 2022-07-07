var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;


function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
    //console.log(document.getElementById("text").innerHTML);
}

setTimeout(() => {
    typeWriter();

}, 500)

window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: '50px' });
sr.reveal('.slogan', { duration: 3000, origin: 'left' })
sr.reveal('.card', { duration: 3000, origin: 'right' })