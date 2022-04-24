import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();

const server = express();
const host = 'http://localhost:'
const port = 5000;

// recebendo json na App
server.use(express.json())
// usando routes.ts
server.use(router)

// Servidor criado
server.listen(port, () => {
    console.log(`Server is running on ${host}${port}/`);
})