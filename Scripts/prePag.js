import { MudarTemaClick, MudarTemaLoading } from "./funcionalidades/mudar_tema.js";

// Referente a tema claro e escuro

MudarTemaLoading();

const btn_tema = document.getElementById("btn_tema");
btn_tema.addEventListener("click", MudarTemaClick);


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