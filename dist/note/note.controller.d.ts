import { NoteService } from "./note.service";
import { CreateNoteDto } from "./Dto/create.note.dto";
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    createNote(createNoteDto: CreateNoteDto): Promise<import("./note.model").Note>;
    updateNote(id: number, updateNoteDto: CreateNoteDto): Promise<import("./note.model").Note>;
    deleteNote(id: number): Promise<void>;
    getNotesByChildAndParent(parentId: number, childId: number): Promise<import("./note.model").Note[]>;
    getNotesByParent(parentId: number): Promise<import("./note.model").Note[]>;
}
