import { MudarTemaClick, MudarTemaLoading } from "./funcionalidades/mudar_tema.js";

MudarTemaLoading();

const btn_tema = document.getElementById("btn_tema")
btn_tema.addEventListener("click", MudarTemaClick)