
function IniciandoTema(){           //Essa função pega o tema definido no aparelho do usuario ou do localstorage, para depois ser usado em outras funções

    const tema_salvo = localStorage.getItem('tema');
    if(tema_salvo){
        return tema_salvo;
    }else{
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const tema_preferido = userPrefersDark ? 'dark' : 'light';
        return tema_preferido;
    }
}

export function MudarTemaLoading(){

    const tema = IniciandoTema();

    if(tema === "dark"){
        document.body.classList.add("dark");
        localStorage.setItem('tema', 'dark')
    }else{
        localStorage.setItem('tema', 'light')
    }
    
}

export function MudarTemaClick(){

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('tema', 'dark')
    }else{
        localStorage.setItem('tema', 'light')
    }
}
    