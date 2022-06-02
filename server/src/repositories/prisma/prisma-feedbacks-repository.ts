import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

// arquivo responsável por implementar ações do BD
export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      //data -> quais os dados para a criação de um novo feedback
      data: {
        // short syntax
        type,
        comment,
        screenshot,
      }
      //select -> quais dados retornar pós criação
    })
  };

}