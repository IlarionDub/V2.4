const cors = require('cors');
const jsonServer = require('json-server');
const express = require('express');

// Використовуємо Express як основний сервер
const app = express();
app.use(cors()); // Увімкнути CORS для всіх запитів

// Додаткові опції для CORS
const corsOptions = {
    origin: ['http://localhost:3000', 'https://ilariondub.github.io', 'https://a800-78-99-54-47.ngrok-free.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));

// Налаштування JSON Server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares); // Стандартні середовища JSON Server
app.use('/api', router); // Додаємо маршрути JSON Server під шляхом /api

// Тестовий маршрут для перевірки
app.get('/posts', (req, res) => {
    res.json([{ id: 1, title: 'Test Post' }]);
});

// Запуск сервера
const PORT = 3000; // Змінити порт, якщо потрібно
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`JSON Server is accessible at http://localhost:${PORT}/api`);
});
