// variaveis contagem da direção

let num1 =2200;
let num2 =20;

// slide do botão direito

let btnRight = document.getElementById('btnright');
let btnLeft = document.getElementById('btnleft');

btnRight.addEventListener('click', function(){
    let limit = document.getElementById('limitador').getBoundingClientRect().left;
     
    let limited = Math.floor(limit);
    let referenceRight = Math.floor(btnRight);
    let slideContainer = document.getElementById('container-carrosel');
    let carrosel = document.getElementById('carrossel');

    if(limited > referenceRight){
        slideContainer.style.transform = 'translateX(-'+ num1 + 'px)'

        num1 +=100;

        num2 -= 100;
    }else{
        let stoped = referenceRight * slideContainer.clientWidth / 
        carrosel.clientWidth -carrosel.clientWidth +100;

        let stopedRounded = Math.floor(stoped);
       slideContainer.style.transform = 'translateX(-'+ num1 + 'px)'
    }

})



btnLeft.addEventListener('click', function(){
    let limit = document.getElementById('limitador').getBoundingClientRect().left;
     
    let limited = Math.floor(limit);
    let referenceLeft = Math.floor(btnLeft);
    let slideContainer = document.getElementById('container-carrosel');
    let carrosel = document.getElementById('carrossel');

    if(limited < referenceLeft){
        slideContainer.style.transform = 'translateX(+'+ num2 + 'px)'

        num1 -=100;

        num2 +=100;
    }else{
        let stoped = referenceLeft * slideContainer.clientWidth / 
        carrosel.clientWidth -carrosel.clientWidth +100;

        let stopedRounded = Math.floor(stoped);
       slideContainer.style.transform = 'translateX(+'+ num2 + 'px)'
    }

})