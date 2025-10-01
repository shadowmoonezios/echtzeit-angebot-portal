const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:echtzeit-angebot-portal', { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
  console.log('Neuer Benutzer verbunden');

  socket.on('disconnect', () => {
    console.log('Benutzer getrennt');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});