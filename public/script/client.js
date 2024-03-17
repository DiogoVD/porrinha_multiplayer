var socket = io();

// Declaração de variaveis
const playerNameInput = document.querySelector("#name_login");
const palitoInput = document.querySelector("#num_palitos");
const palpiteInput = document.querySelector("#palpite");
const numJogInput = document.getElementById("num_jogadores");
const listPalpitesInput = document.getElementById("list_palpites");
const sendPalitoButton = document.querySelector("#btn_palitos");
const sendButton = document.querySelector("#btn_palpite");

let userAtivos = 3;


sendPalitoButton.addEventListener("click", () => {
    const playerName = playerNameInput.value;
    const palito = palitoInput.value;
    const json = `{"nome":"${playerName}", "palitos": ${palito}}`

    const data = JSON.parse(json);
    socket.emit('palitos message', data);
    
});


// trata os dados recebidos da mensagem
socket.on('userConected message', (nUsers) => {
    // console.log(nUsers.qtdUser);
    userAtivos = nUsers.qtdUser;
    numJogInput.innerText = `jogadores ativos: ${userAtivos}`;
});

socket.on('atualizaTabelaUsers message', (dataUser) => {
    
    const tx = dataUser.players;
    const users = tx.split(",")
    // console.log();
    users.map((x) =>{
        console.log(x);
        listPalpitesInput.innerHTML += `<li>${x}: -- </li>`;
    });
    
});
