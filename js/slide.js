// Obtém a referência para o elemento com o ID "sequencia"
var s = document.getElementById("sequencia");
    
// Array de caminhos das imagens
var imgs = ["img/faixada.jpeg", "img/sala-img01.jpeg", "img/sala-img02.jpeg", "img/sala-img03.jpeg"];
    
// Número total de imagens
var len = imgs.length;
    
// Índice inicial
var i = 0;

// Função que controla a lógica do slide
function slide() {
    // Se o índice ultrapassar o número total de imagens, reinicia
    if (i > len - 1) {
        i = 0;
    }

    // Atualiza a imagem exibida com o caminho da imagem no índice atual
    s.src = imgs[i];

    // Incrementa o índice para a próxima imagem
    i++;

    // Configura um atraso de 3000 milissegundos (3 segundos) para a próxima chamada
    setTimeout(slide, 3000);
}

// Chama a função slide
slide();    

// Esse código JavaScript cria um efeito de slide automático, trocando as imagens em
// intervalos regulares.