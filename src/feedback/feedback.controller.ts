import { Body, Controller, Post } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";
import { CreateFeedbackDto } from "./Dto/create.feedback.dto";

@Controller("feedback")
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }
}
