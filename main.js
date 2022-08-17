
var btnPopup = document.getElementById('btn-mas');
var overlay = document.getElementById('overlay-proyects');
var popup = document.getElementById('popup');
var btnCerrar = document.getElementById('btn-close-popup');


function abrirPopUp(numero_proyecto) {

    overlay.classList.add('active', 'animate__animated', 'animate__fadeInBottomLeft');
    proyecto = document.getElementById('proyect_number');

    switch (numero_proyecto) {
        case 1:
            proyecto.innerHTML = "<strong>Mi Portafolio<strong>";
            proyecto.innerHTML+= "<h4>Mi primer Proyecto realizado utilizando HTML ,CSS Y JS<h4>";
            proyecto.innerHTML+="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V2jMDXoVEmdGATcoXuPtFgR2j9y-eWFTww&usqp=CAU'> </img>"
            proyecto.innerHTML+='<a href="#" class="btn-mas-popup" id="btn-mas" onclick="">Conocer Más</a>'


            break
        case 2:
            proyecto.innerHTML = "Proyecto 2";
            break
        case 3:
            proyecto.innerHTML = "Proyecto 3";
            break
        case 4:
            proyecto.innerHTML = "Proyecto 4";
            break
    }

}
function cerrarPopUp() {
    overlay.classList.remove('active', 'animate__animated', 'animate__fadeInBottomLeft');
};


window.addEventListener('load', () => {

    setTimeout(load, 800);
    function load() {
        var contenedor = document.getElementById('container');
        var preloader = document.getElementById('preloader');
        var footer = document.getElementById('footer');

        contenedor.classList.add('visible');



        footer.classList.add('visible', 'animate__animated', 'animate__fadeInBottomLeft')

        contenedor.classList.add('animate__animated', 'animate__fadeInBottomLeft')
        preloader.classList.add('oculto');
    }

})

const typed = new Typed('.typed', {
    strings: [

        '<i class="name">Jaime Cabezas</i>'


    ],
    typeSpeed: 75,
    startDelay: 2000,



});

const typed2 = new Typed('.typed2', {
    strings: [
        'Desarrollando distintas soluciones de software adecuadas a tu necesidades.'
    ],
    typeSpeed: 30,
    startDelay: 3000,

});
