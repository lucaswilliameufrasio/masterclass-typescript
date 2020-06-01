import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Lucas William", email: "lucaswilliameufrasio@gmail" }];

export default {
  async index(request: Request, response: Response) {
    return response.json(users);
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Lucas William",
        email: "lucaswilliameufrasio@gmail.com",
      },
      message: {
        subject: "Bem vindo a matrix",
        body: "Eae",
      },
    });

    return response.send();
  },
};
