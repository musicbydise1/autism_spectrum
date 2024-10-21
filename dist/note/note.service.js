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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const note_model_1 = require("./note.model");
let NoteService = class NoteService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async createNote(createNoteDto) {
        return await this.noteModel.create(createNoteDto);
    }
    async updateNote(id, updateNoteDto) {
        const note = await this.noteModel.findByPk(id);
        if (!note) {
            throw new common_1.NotFoundException("Note not found");
        }
        return await note.update(updateNoteDto);
    }
    async deleteNote(id) {
        const note = await this.noteModel.findByPk(id);
        if (!note) {
            throw new common_1.NotFoundException("Note not found");
        }
        await note.destroy();
    }
    async getNotesByChildAndParent(parentId, childId) {
        return await this.noteModel.findAll({
            where: {
                parentId,
                childId,
            },
        });
    }
    async getNotesByParent(parentId) {
        return await this.noteModel.findAll({
            where: {
                parentId,
            },
        });
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(note_model_1.Note)),
    __metadata("design:paramtypes", [Object])
], NoteService);
//# sourceMappingURL=note.service.js.map