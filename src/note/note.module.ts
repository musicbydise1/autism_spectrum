import { Module } from "@nestjs/common";
import { NoteController } from "./note.controller";
import { NoteService } from "./note.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Note } from "./note.model";

@Module({
  controllers: [NoteController],
  providers: [NoteService],
  imports: [SequelizeModule.forFeature([Note])],
})
export class NoteModule {}
