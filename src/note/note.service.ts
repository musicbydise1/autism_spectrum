import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Note } from "./note.model";
import { CreateNoteDto } from "./Dto/create.note.dto";

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note
  ) {}

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    return await this.noteModel.create(createNoteDto);
  }

  async updateNote(id: number, updateNoteDto: CreateNoteDto): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException("Note not found");
    }
    return await note.update(updateNoteDto);
  }

  async deleteNote(id: number): Promise<void> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException("Note not found");
    }
    await note.destroy();
  }

  async getNotesByChildAndParent(
    parentId: number,
    childId: number
  ): Promise<Note[]> {
    return await this.noteModel.findAll({
      where: {
        parentId,
        childId,
      },
    });
  }
  async getNotesByParent(parentId: number): Promise<Note[]> {
    return await this.noteModel.findAll({
      where: {
        parentId,
      },
    });
  }
}
