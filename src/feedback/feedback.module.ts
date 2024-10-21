import { Module } from "@nestjs/common";
import { FeedbackController } from "./feedback.controller";
import { FeedbackService } from "./feedback.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Feedback } from "./feedback.model";

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports: [SequelizeModule.forFeature([Feedback])],
})
export class FeedbackModule {}
