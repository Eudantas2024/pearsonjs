// selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
// console.log(slides);
const dots = document.querySelectorAll(".dot");
// variavel de lógica de controle pessoal
let slideIndex = 0;

function showSlides(){
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

// Inicialização (chamar a função)
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


