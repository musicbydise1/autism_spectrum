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
exports.ChildController = void 0;
const common_1 = require("@nestjs/common");
const child_service_1 = require("./child.service");
const create_child_dto_1 = require("./Dto/create.child.dto");
const update_child_dto_1 = require("./Dto/update.child.dto");
let ChildController = class ChildController {
    constructor(service) {
        this.service = service;
    }
    createChild(childDto) {
        return this.service.createChild(childDto);
    }
    getByParent(parentId) {
        return this.service.getByParent(parentId);
    }
    getAllChildren() {
        return this.service.getAllChildren();
    }
    updateChild(id, updateChildDto) {
        return this.service.updateChild(id, updateChildDto);
    }
    deleteChild(id) {
        return this.service.deleteChild(id);
    }
};
exports.ChildController = ChildController;
__decorate([
    (0, common_1.Post)("/createChild"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_child_dto_1.CreateChildDto]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "createChild", null);
__decorate([
    (0, common_1.Get)("/getByParent/:parentId"),
    __param(0, (0, common_1.Param)("parentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "getByParent", null);
__decorate([
    (0, common_1.Get)("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "getAllChildren", null);
__decorate([
    (0, common_1.Put)("admin/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_child_dto_1.UpdateChildDto]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "updateChild", null);
__decorate([
    (0, common_1.Delete)("admin/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChildController.prototype, "deleteChild", null);
exports.ChildController = ChildController = __decorate([
    (0, common_1.Controller)("child"),
    __metadata("design:paramtypes", [child_service_1.ChildService])
], ChildController);
//# sourceMappingURL=child.controller.js.map