import express from 'express';

const server = express();
const port = 5000;

// Servidor criado
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})