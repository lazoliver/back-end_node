import { Request, Response } from 'express';

class CreateUserController{
    handle(req: Request, res: Response) {
        return res.json([
            {
                name: "Wilian"
            },
            {
                name: "Ana"
            }
        ])
    }
}

export { CreateUserController }