import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user_id = request.headers.user_id as string;
      const lista = this.listAllUsersUseCase.execute({ user_id });

      return response.json(lista)
    } catch (error) {
      return response.status(400).json({
        error: error.message
      });
    }
  }
}

export { ListAllUsersController };
