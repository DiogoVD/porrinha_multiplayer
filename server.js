// Configurando express criando servidor http e o socket.io

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Variaveis
const todosPalitos = [];
const todosPlayers = [];
let usersConectados = 0;


// definindo rotas
app.use("/public", express.static("public"));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

// inicia escuta do servidor na porta 3000
server.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});

io.on("connection", (socket) =>{
    console.log("Usuário conectado");
    usersConectados++;
    const userJson = `{"qtdUser":"${usersConectados}"}`;
    const dataUser = JSON.parse(userJson);
    // console.log(dataUser);
    io.emit('userConected message', dataUser);

    // usuarios desconectados
    socket.on('disconnect', () =>{
        console.log("Usuário desconectado");
        usersConectados--;
        const userJson = `{"qtdUser":"${usersConectados}"}`;
        const dataUser = JSON.parse(userJson);
        // console.log(dataUser);
        io.emit('userConected message', dataUser);
    });

    // recebimento dos dados de palitos e nomes
    socket.on('palitos message', (data) => {
        
        todosPalitos.push(data.palitos);
        todosPlayers.push(data.nome);

        // console.log(todosPalitos);
        // console.log(todosPlayers);

        const json = `{"players":"${todosPlayers}"}`;
        const dataUser = JSON.parse(json);
        io.emit('atualizaTabelaUsers message', dataUser);
    
    });


    // socket.on('palitos message', (data) => {
        
    //     todosPalitos.push(data.palitos);
    //     todosPlayers.push(data.nome);

    //     console.log(todosPalitos);
    //     console.log(todosPlayers);
    //     // console.log(`Mensagem recebida servidor: ${data}`); //recebe os dados da mensagem.
    //     // io.emit('chat message', data); //envia para todos os usuarios conectados os dados da mensagem.
    //     // socket.broadcast.emit('chat message', data); //envia para todos os usuarios conectados exceto o que enviou.
    // });

});