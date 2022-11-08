window.sr = ScrollReveal();
ScrollReveal({ distance: '50px' });
sr.reveal('.vem-esquerda', { duration: 3000, origin: 'left', reset: false })
sr.reveal('.vem-direita', { duration: 3000, origin: 'right', reset: false })
sr.reveal('.vem-cima', { duration: 3000, origin: 'top', reset: false })
sr.reveal('.vem-baixo', { duration: 3000, origin: 'bottom', reset: false })

sr.reveal('.vem-esquerda-noreset', { duration: 3000, origin: 'left', reset: false })
sr.reveal('.vem-direita-noreset', { duration: 3000, origin: 'right', reset: false })
sr.reveal('.vem-cima-noreset', { duration: 3000, origin: 'top', reset: false })
sr.reveal('.vem-baixo-noreset', { duration: 3000, origin: 'bottom', reset: false })

function resolucao() {
    larguraTela = screen.width

    if (larguraTela == 1920) {
        document.body.style.fontSize = '18px'
    } else if (larguraTela == 1680) {
        document.body.style.fontSize = '12px'
    } else if (larguraTela == 1600) {
        document.body.style.fontSize = '12px'
    } else if (larguraTela == 1440) {
        document.body.style.fontSize = '10px'
    } else if (larguraTela == 1400) {
        document.body.style.fontSize = '10px'
    } else if (larguraTela == 1366) {
        document.body.style.fontSize = '8px'
    } else if (larguraTela == 1360) {
        document.body.style.fontSize = '8px'
    } else if (larguraTela == 1280) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela == 1152) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela == 1024) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela <= 992) {
        document.body.style.fontSize = '9px'
    } else {
        document.body.style.fontSize = '14px'
    }
}

resolucao()

function menu() {
    var ww = window.innerWidth;

    let checkbox = document.querySelector('.checkbox');

    if (checkbox.checked && ww >= 992) {
        checkbox.checked = false
        console.log('tirou o check')
    }
}

window.addEventListener('resize', function () {
    menu()
    resolucao()
});



const links = document.querySelectorAll(".menu-items ul li");
const hamburger = document.querySelector(".checkbox");

links.forEach(link => {
    link.addEventListener('click', () => {

        setTimeout(() => {
            hamburger.checked = false;
        }, 300)
    })
})



function modalimg(img) {
    var modal = document.getElementById('janelaModal');
    var modalImg = document.getElementById("imgModal");
    var captionTexto = document.getElementById("txtImg");
    var btFechar = document.getElementsByClassName("fechar")[0];
    var navbar = document.getElementsByClassName("custom-navbar")[0];

    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionTexto.innerHTML = img.alt;
    navbar.style.display = "none"
    
    btFechar.onclick = function () {
        navbar.style.display = "block"
        modal.style.display = "none";
    }
    
    modal.onclick = function () {
        modal.style.display = "none";
        navbar.style.display = "block"
    }
}