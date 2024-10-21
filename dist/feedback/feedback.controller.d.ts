import { FeedbackService } from "./feedback.service";
import { CreateFeedbackDto } from "./Dto/create.feedback.dto";
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<import("./feedback.model").Feedback>;
}
