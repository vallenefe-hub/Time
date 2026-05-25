import { jogadores, banners } from "./objetos.js";

// Montando o grid das imagens
// Recuperar o elemento html que recebera o grid

const meuGrid = document.querySelector('#grid');

// Montando o grid - inserindo as imagens 
banners.forEach(banner => {
    meuGrid.innerHTML += `
    <img src="${banner}" alt="imagem do banner" class="img-grid">
    `;

})

// Pegando o hero
const meuHero = document.querySelector('#hero');

/* Função para trocar o background */
function trocarBanner(src){
    meuHero.style.backgroundImage = `
    var(--gradient), 
    url(${src})
    `;

    // Aplicar a animação toda vez que a imagem mudar
    meuHero.style.animation = 'none';
    meuHero.offsetHeight; 
    meuHero.style.animation =  'myhero .5s linear forwards';
}


// clicar na imagem do grid e ela ir para o fundo
document.addEventListener('click', function(e) {
    // veerificar se o cara que recebeu o click possui a classe CSS img grid
    if(e.target.classList.contains('img-grid')){
        const src = e.target.getAttribute('src');
        trocarBanner(src);
    }

});




// Deixar a primeira imagem aleatória
const numeroSorteado = Math.floor(Math.random() * banners.length);
const bannerInicial = banners[numeroSorteado];
trocarBanner(bannerInicial);
