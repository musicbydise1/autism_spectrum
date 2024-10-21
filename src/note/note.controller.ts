import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./Dto/create.note.dto";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  @Put(":id")
  async updateNote(
    @Param("id") id: number,
    @Body() updateNoteDto: CreateNoteDto
  ) {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(":id")
  async deleteNote(@Param("id") id: number) {
    return this.noteService.deleteNote(id);
  }

  @Get()
  async getNotesByChildAndParent(
    @Query("parentId") parentId: number,
    @Query("childId") childId: number
  ) {
    return this.noteService.getNotesByChildAndParent(parentId, childId);
  }

  @Get()
  async getNotesByParent(@Query("parentId") parentId: number) {
    return this.noteService.getNotesByParent(parentId);
  }
}
