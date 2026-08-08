import { MudarTemaClick, MudarTemaLoading } from "./funcionalidades/mudar_tema.js";

// Referente a tema claro e escuro

MudarTemaLoading();

const btn_tema = document.getElementById("btn_tema");
btn_tema.addEventListener("click", MudarTemaClick);


// Referente a var --vh que pega o tamanho da tela no mobile e ajuda aos elementos a não bugar o tamnho quando a barra do navegador sobe ou desce

/*function fixMobileViewport() {
  // Obtém 1% da altura interna real do navegador
  const vh = window.innerHeight * 0.01;
  // Define o valor na variável CSS --vh na raiz do documento
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Executa ao carregar a página
fixMobileViewport();

// Atualiza apenas se o usuário girar o celular
window.addEventListener('orientationchange', () => {
  // Pequeno timeout para aguardar a rotação concluir
  setTimeout(fixMobileViewport, 200);
});*/


// Referente ao nav

document.addEventListener("DOMContentLoaded", () => {      // CUIDA DO MOVIMENTO DAO NAV DE TROCA DE FIXED  E REFERENCE

    const primeiraSecao = document.getElementById("header"); 
    const segundaSecao = document.getElementById("perfil"); 
    const nav = document.getElementById("nav");

    const observaSegunda = new IntersectionObserver(         // Observamos a segunda sessão [perfil], para fazer a alteração do nav para fixed
        (e) => {
            e.forEach((e) => {
                if (e.isIntersecting) {
                    nav.classList.add("top");
                    nav.classList.remove("bottom");
                }
            }) 
        },
        { threshold: 0.1}    // O evento dispara assim que 10% da segunda seção aparece na tela
    )
    observaSegunda.observe(segundaSecao);

    const observaPrimeira = new IntersectionObserver(           // Observamos a primeria sessão [header], para fazer a alteração do nav para reference
        (e) => {
            e.forEach((e) => {
                if (e.isIntersecting) {
                    nav.classList.add("bottom");
                    nav.classList.remove("top");
                }
            }) 
        },
        { threshold: 0.1}    // O evento dispara assim que 10% da segunda seção aparece na tela
    )
    observaPrimeira.observe(primeiraSecao);


});




// Referentes a filtragem dos projetos

const card_filtros = document.getElementById("card_filtros");  // card/ objeto total do filtro
const opcoes_filtros = document.getElementById("form_filtros"); // formulario com as opções de filtros

const btn_filtro = document.getElementById("btn_filtros");    // abrir card filtros
btn_filtro.addEventListener("click", () => {
    card_filtros.classList.toggle("ativo")
});

const sair_filtros = document.getElementById("sair_filtros"); // Fechar card filtros
sair_filtros.addEventListener("click", () => {
    card_filtros.classList.toggle("ativo")
    event.preventDefault()
});

