if(window.innerWidth > 1050) {
    function navMenu() {
        const accordList = document.querySelector(".cabecalho-navegacao");
        const burgerCheckbox = document.getElementById("burger-checkbox");
        accordList.classList.add('ativo');
    
        function activeAccordion() {
            if (burgerCheckbox.checked) {
                accordList.classList.add("ativo");
            } else {
                accordList.classList.remove("ativo");
            }
        }
        burgerCheckbox.addEventListener("change", activeAccordion);
    }
    
    navMenu();    
}

function animacaoScroll() {
    const elementosScroll = document.querySelectorAll('.scroll')

    if(elementosScroll.length) {  
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            elementosScroll.forEach(elemento => {
                const pegarTop = elemento.getBoundingClientRect().top;
                const sessaoVisivel = pegarTop - windowMetade < 0;
                if(sessaoVisivel) {
                    elemento.classList.add('ativo');
                }
            });
    }
    }
    window.addEventListener('scroll', animaScroll);
}
animacaoScroll();
