import { Router, Request, Response } from 'express';

// instânciando o Router
const router = Router();

// GET na rota '/'
router.get('/', (req: Request, res: Response) => {
    
    // Todas as funcionalidades

    return res.json({mensagem: 'Bem-vindo a API'});

});

// GET 'usuarios'
router.get('/usuarios', (req: Request, res: Response) => {
    
    return res.json([
        {
            name: 'Wilian'
        },
        {
            name: 'Ana'
        }
    ])
});

export { router }