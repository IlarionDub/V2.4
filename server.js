const cors = require('cors');
const jsonServer = require('json-server');
const express = require('express');

const app = express();
const middlewares = jsonServer.create(); // Використання middleware для json-server

const corsOptions = {
    origin: ['http://localhost:3000', 'https://ilariondub.github.io', 'https://a800-78-99-54-47.ngrok-free.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

// Налаштування middleware
app.use(cors(corsOptions)); // Додати підтримку CORS
app.use(middlewares);
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self';");
    next();
});

// Використання маршрутизатора для обробки запитів

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
