// Espera o DOM ser completamente carregado para executar o código
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o efeito de digitação
    var typed = new Typed(".input", {
        strings: ["Desenvolvedora Front-End.", "", ""], // Define as strings para o efeito de digitação
        typeSpeed: 80, // Velocidade de digitação em milissegundos por caractere
        backSpeed: 70, // Velocidade de apagar em milissegundos por caractere
        loop: true // Define se o efeito de digitação deve ser contínuo
    });

    // Menu responsivo
    let menu = document.querySelector('#menu-icone'); // Seleciona o ícone do menu
    let navlist = document.querySelector('.navlist'); // Seleciona a lista de navegação

    // Adiciona um evento de clique no ícone do menu
    menu.onclick = () => {
        menu.classList.toggle('bx-x'); // Alterna a classe 'bx-x' no ícone do menu para exibir um ícone de fechar
        navlist.classList.toggle('open'); // Alterna a classe 'open' na lista de navegação para abrir ou fechar o menu
    };

    // Cabeçalho fixo ao rolar
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header"); // Seleciona o cabeçalho
        header.classList.toggle("sticky", window.scrollY > 100); // Adiciona a classe 'sticky' ao cabeçalho se a posição do scroll for maior que 100 pixels
    });

    // Mostra o botão de rolagem para cima
    window.addEventListener("scroll", function () {
        let scrool = document.querySelector("#scrool-up"); // Seleciona o botão de rolagem para cima
        scrool.classList.toggle("srcl", window.scrollY > 600); // Adiciona a classe 'srcl' ao botão se a posição do scroll for maior que 600 pixels
    });

    // Rolagem suave para as seções ao clicar nos links do menu
    let navLinks = document.querySelectorAll('.navlist a'); // Seleciona todos os links dentro da lista de navegação

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) { // Adiciona um ouvinte de evento de clique a cada link
            e.preventDefault(); // Previne o comportamento padrão de navegação

            let targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo da rolagem suave
            let targetSection = document.getElementById(targetId); // Seleciona a seção de destino

            if (targetSection) { // Verifica se a seção de destino existe
                window.scrollTo({
                    top: targetSection.offsetTop, // Define a posição de rolagem para o topo da seção de destino
                    behavior: 'smooth' // Define a rolagem suave como comportamento
                });
            }
        });
    });
});
