const header = document.querySelector("#header");

const elementos = document.querySelectorAll(".revelar");

const botaoMenu = document.querySelector("#menu-mobile");

const nav = document.querySelector("#nav");

const linksMenu = document.querySelectorAll("#nav a");


// HEADER AO ROLAR

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("rolagem");

    } else {

        header.classList.remove("rolagem");

    }

});


// MENU MOBILE

botaoMenu.addEventListener("click", () => {

    nav.classList.toggle("ativo");

    botaoMenu.classList.toggle("ativo");

    document.body.classList.toggle("menu-aberto");

});


// FECHA O MENU AO CLICAR NUM LINK

linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("ativo");

        botaoMenu.classList.remove("ativo");

        document.body.classList.remove("menu-aberto");

    });

});


// ANIMAÇÃO AO ROLAR

const observer = new IntersectionObserver(

    entradas => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("ativo");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementos.forEach(elemento => {

    observer.observe(elemento);

});


// APARECE O HERO LOGO NO INÍCIO

window.addEventListener("load", () => {

    document
        .querySelectorAll(".hero .revelar")
        .forEach(elemento => {

            setTimeout(() => {

                elemento.classList.add("ativo");

            }, 150);

        });

});