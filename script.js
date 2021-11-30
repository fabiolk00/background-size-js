const img = document.querySelector(".main__image");

const cover = document.getElementById("cover");
const contain = document.getElementById("contain");
const width = document.getElementById("width");
const width_height = document.getElementById("width-height");
const display_none = document.getElementById ("display-none");


cover.addEventListener('click', () => {
    img.classList.add("style__background-cover");
    img.classList.remove("style__background-contain");
    img.classList.remove('style__background-width');
    img.classList.remove ('style__display-none');
});

contain.addEventListener ('click', () => {
    img.classList.add ('style__background-contain')
    img.classList.remove ('style__background-cover')
    img.classList.remove('style__background-width');
    img.classList.remove ('style__display-none');
});

width.addEventListener ('click', () => {
    img.classList.add ('style__background-width')
    img.classList.remove ('style__background-cover')
    img.classList.remove ('style__background-contain')
    img.classList.remove ("style__display-none");
});

display_none.addEventListener ('click', () => {
    img.classList.add ('style__display-none');
    img.classList.remove ('style__background-cover')
    img.classList.remove ('style__background-contain')
    img.classList.remove('style__background-width');
});

/*
    const : estão pegando os items pelo ID.

    const img : está selecionando a classe em um HTML e essa classe está sendo 
    estilizada em um CSS.

    quais são os triggers pra função funcionar: o click nos inputs type="radio".

    o que as funções estão executando: toda vez que clicarmos nos inputs
    a const img recebe um classList.add (adiciona uma classe a um elemento)
    e, também, ao mesmo tempo, remove classes que vieram de herança do ultimo click.
    
*/