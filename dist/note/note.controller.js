"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const note_service_1 = require("./note.service");
const create_note_dto_1 = require("./Dto/create.note.dto");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async createNote(createNoteDto) {
        return this.noteService.createNote(createNoteDto);
    }
    async updateNote(id, updateNoteDto) {
        return this.noteService.updateNote(id, updateNoteDto);
    }
    async deleteNote(id) {
        return this.noteService.deleteNote(id);
    }
    async getNotesByChildAndParent(parentId, childId) {
        return this.noteService.getNotesByChildAndParent(parentId, childId);
    }
    async getNotesByParent(parentId) {
        return this.noteService.getNotesByParent(parentId);
    }
};
exports.NoteController = NoteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateNote", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteNote", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("parentId")),
    __param(1, (0, common_1.Query)("childId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotesByChildAndParent", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("parentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotesByParent", null);
exports.NoteController = NoteController = __decorate([
    (0, common_1.Controller)("note"),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
//# sourceMappingURL=note.controller.js.map