import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

// instânciando o Router
const router = Router();
const createUserController = new CreateUserController();

// GET na rota '/'
router.get('/', (req: Request, res: Response) => {
    return res.json({mensagem: 'Bem-vindo a API'});
})

// GET 'usuarios'
router.get('/usuarios', createUserController.handle)

export { router }