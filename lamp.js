const ligar = document.getElementById ("ligar");
const desligar = document.getElementById ("desligar");
const lamp = document.getElementById ("lamp");

function lampOn (){
    lamp.src ='https://thumbs.dreamstime.com/z/l%C3%A2mpada-acesa-realista-isolada-em-branco-ilustra%C3%A7%C3%A3o-vetorial-opacidade-eps-213876711.jpg';
}

function lampOff(){
    lamp.src ='https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg';
}

ligar = addEventListener ("click", lampOn)
desligar = addEventListener ("click", lampOff)
lamp = addEventListener ("mouseover", lampOn)