import { Feedback } from "./feedback.model";
import { CreateFeedbackDto } from "./Dto/create.feedback.dto";
export declare class FeedbackService {
    private feedbackModel;
    constructor(feedbackModel: typeof Feedback);
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
}
