const slider = document.querySelector("#slider"); /*decalra constante el componente prncipal*/
let sliderItem = document.querySelectorAll(".slider-item");/*optenemos todos los items*/
let itemLast = sliderItem[sliderItem.length -1];/*seleccionamos el ultimo*/
/*declaramos botones*/
const btn_left = document.querySelector("#btn_left");
const btn_rigth = document.querySelector("#btn_rigth");


/*mandamos al ultimo elemento despues de empezar el parent -inicio*/ 
slider.insertAdjacentElement('afterbegin',itemLast);

function Next() {
    /*en cada click guardamos al primer elemento*/
    let sliderItemFirts = document.querySelectorAll(".slider-item")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        /*mandamos al primer elemento antes de que termine el parent -final*/ 
        slider.insertAdjacentElement('beforeend',sliderItemFirts);
        slider.style.marginLeft = "-100%";
    },700);
}


function Back(){
    /*en cada click guardamos al ultimo elemento*/
    let sliderItemLast = document.querySelectorAll(".slider-item")[-1];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        /*mandamos al ultimo elemento despues de comenzar el parent -inicio*/ 
        slider.insertAdjacentElement('afterbegin',sliderItemLast);
        slider.style.marginLeft = "-100%";
    },700);
}

btn_rigth.addEventListener('click', function(){
    Next();
});

btn_left.addEventListener('click', function(){
    Back();
});

setInterval(function(){
    Next();
}, 5000);