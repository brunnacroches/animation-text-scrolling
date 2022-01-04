const imagesLoaded = require('imagesloaded');

// Clamps a value between an upper and lower bound
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c,d), Math.max(c,d));

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), resolve);
    });num
};

// Preload fonts
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

export {
    preloadImages,
    preloadFonts
};


// Detecte quando as imagens foram carregadas
// Instalar 
// > gerenciador de pacotes 
// > Instale via npm :npm install imagesloaded


// O método require () é usado para carregar e armazenar em cache os módulos JavaScript .

// Fixando um valor entre um limite superior e inferior usaremos o:  
//clamp () ==> ele fixa um valor entre um limite superior e inferior .
//O clamp () permite selecionar um valor médio dentro de uma faixa de valores entre um mínimo e um máximo definidos

// E trabalhamos aqui também com uma Arrow Function :
// palavra chave = (const clamp) 
//+ 
//nome da função = (clamp) 
// =
//( ? ) recebe parametro = (num, min, max) 
// ==>
//fechando a arrow com: (==>) 
// : ou ?
//seguido com um IF Ternário 
//(? = if => se sim ) 
//(: = else => senão )
// var status = nota > 7 ? "Aprovado ": "Reprovado"

//Traduzindo
// SE SIM (?)===> numero menor ou igual ao minimo (num <= min) 
// SE NAO (:) ===> numero maior ou igual ao minimo (num >= min)

//SE SIM (?) ===> numero maior ou igual ao maximo (num >= max)
//SE NAO (:) ====> numero menor ou igual ao maximo (num <= max)



// Sendo assim foi declarado uma constante atribuindo valor : num, min, max //

//