const cors = require('cors');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});



const express = require('express');

const app = express();

// Налаштування CORS для дозволу запитів з певного джерела
const corsOptions = {
    origin: ' https://1ea4-78-99-54-47.ngrok-free.app', // Дозволити лише цей домен
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Дозволені HTTP-методи
    credentials: true // Якщо потрібні cookies
};

app.use(cors(corsOptions));
app.use(express.json());

// Інші маршрути сервера...
app.get('/posts', (req, res) => {
    res.json([{ id: 1, title: 'Test Post' }]);
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});