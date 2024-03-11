var socket = io();

// Declaração de variaveis
const playerNameInput = document.querySelector("#name_login");
const palitoInput = document.querySelector("#num_palitos");
const palpiteInput = document.querySelector("#palpite");
const numJogInput = document.getElementById("num_jogadores");
const sendPalitoButton = document.querySelector("#btn_palitos");
const sendButton = document.querySelector("#btn_palpite");
let userAtivos = 0


sendPalitoButton.addEventListener("click", () => {
    const playerName = playerNameInput.value;
    const palito = palitoInput.value;
    const json = `{"nome":"${playerName}", "palitos": ${palito}}`

    const data = JSON.parse(json);
    socket.emit('palitos message', data);
    
});
setInterval(atualizaUsers(), 1000);


// trata os dados recebidos da mensagem
socket.on('userConected message', (nUsers) => {
    userAtivos = nUsers;
});

function atualizaUsers(){
    numJogInput.innerText = `jogadores ativos: ${userAtivos}`;
}