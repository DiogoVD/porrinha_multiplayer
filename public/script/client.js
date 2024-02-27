var socket = io();

// Declaração de variaveis
const usernameInput = document.querySelector("#username");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#send");

sendButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const message = messageInput.value;
    const data = `${username}: ${message}`;

    socket.emit('chat message', data);
    messageInput.value = "";
});

// trata os dados recebidos da mensagem
socket.on('chat message', (data) => {
    messageInput.value += `${data}<br>`;
});