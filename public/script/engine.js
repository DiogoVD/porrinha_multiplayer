const state = {
    telas:{
        tela_login: document.querySelector("#login"),
        tela_palito: document.querySelector("#t_palito"),
        tela_palpite: document.querySelector("#t_palpite")
    },
    variaveis:{
        nomePlayer: document.querySelector("#name_login"),
        numPalitos: document.querySelector("#num_palitos"),
        palpitePlayer: document.querySelector("#palpite")
    }
}

function f_palpite (){
    state.telas.tela_login.style.display = "none";
    state.telas.tela_palito.style.display = "none";
    state.telas.tela_palpite.style.display = "flex";


}

function f_palito (){
    state.telas.tela_login.style.display = "none";
    state.telas.tela_palito.style.display = "flex";
    state.telas.tela_palpite.style.display = "none";


}

function init (){
    state.telas.tela_login.style.display = "flex";
    state.telas.tela_palito.style.display = "none";
    state.telas.tela_palpite.style.display = "none";
}


init()