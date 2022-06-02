export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  // arquivo responsável por definir quais ações a aplicação pode fazer com 
  // os feedbacks do BD, mas não implementa essas ações
  create: (data: FeedbackCreateData) => Promise<void>;
}