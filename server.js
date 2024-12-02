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

const cors = require('cors');
app.use(cors({
    origin: ['localhost:3000', 'ilariondub.github.io', 'a800-78-99-54-47.ngrok-free.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

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
