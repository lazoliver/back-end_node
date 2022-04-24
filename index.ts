import express, { Request, Response } from 'express';

const server = express();
const host = 'http://localhost:'
const port = 5000;

// GET na rota '/'
server.get('/', (req: Request, res: Response) => {
    
    // Todas as funcionalidades

    return res.json({mensagem: 'Bem-vindo a API'});

});

// GET 'usuarios'
server.get('/usuarios', (req: Request, res: Response) => {
    
    return res.json([
        {
            name: 'Wilian'
        },
        {
            name: 'Ana'
        }
    ])
});

// Servidor criado
server.listen(port, () => {
    console.log(`Server is running on ${host}${port}/`);
})