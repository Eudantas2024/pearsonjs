// selecionando elementos do menu Mobile 
const menuBtn = document.querySelector("#menu");
const closemenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");
const header = document.querySelector("#mobile-navbar [href='index.html']");
const expertiseareas = document.querySelector("#mobile-navbar [href='servicos.html']");
const about = document.querySelector("#mobile-navbar [href='sobre.html']");
const team = document.querySelector("#mobile-navbar [href='time.html']");
const contact = document.querySelector("#mobile-navbar [href='contato.html']");


// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// console.log(slides);
const dots = document.querySelectorAll(".dot");
// variavel de lógica de controle pessoal
let slideIndex = 1;

function showSlides(){
    console.log(slides)
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++; // avançando a variavel
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)  // cria um loop de troca de slide a cada 3 segundos

}


// Ativar menu mobile
// arrow function
// () => {
//     }

// [menuBtn, closeMenuBtn].forEach( (btn) => {
//     btn.addEventListener("click", (e) =>{
//         menu.classList.toggle("menu-active")
//     })
// })

menuBtn.addEventListener("click", (e) =>{
    menu.classList.add("menu-active")

});
closemenuBtn.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});

header.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});
expertiseareas.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});

about.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});
team.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});
contact.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")

});


// Inicialização do slides (chamar a função)
showSlides()







// DOM 
// // Navegador no documento html
// const brand = document.querySelector("#brand");
// // console.log(brand)
// // console.log(brand);
// brand.addEventListener('click', function(event){
//     // console.log("testando o click");
//     // console.log(event.target)
//     event.target.style.color ="blue";
// });


