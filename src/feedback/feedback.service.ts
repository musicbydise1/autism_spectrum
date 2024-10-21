import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Feedback } from "./feedback.model";
import { CreateFeedbackDto } from "./Dto/create.feedback.dto";

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback)
    private feedbackModel: typeof Feedback
  ) {}

  async createFeedback(
    createFeedbackDto: CreateFeedbackDto
  ): Promise<Feedback> {
    return this.feedbackModel.create(createFeedbackDto);
  }
}
