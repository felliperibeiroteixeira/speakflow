// Adiciona um evento de clique ao elemento com o ID "clique-aqui"
document.getElementById('clique-aqui').addEventListener('click', function() {
        // Quando clicado, faz a rolagem suave até o elemento com o ID "sobre"
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });       
});

// Esse código JavaScript cria um comportamento de rolagem suave quando o botão 
// com o ID "clique-aqui" é clicado, levando o usuário até a seção com o ID "sobre".