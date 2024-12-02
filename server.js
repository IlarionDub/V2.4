
const cors = require('cors');
const jsonServer = require('json-server');
const express = require('express');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.create();

const corsOptions = {
    origin: ['http://localhost:3000', 'https://ilariondub.github.io', 'https://a800-78-99-54-47.ngrok-free.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};

app.use(cors(corsOptions)); // Додати підтримку CORS
app.use(middlewares);
app.use('/api', router); // JSON Server працює на /api

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
