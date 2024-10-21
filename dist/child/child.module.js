"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildModule = void 0;
const common_1 = require("@nestjs/common");
const child_controller_1 = require("./child.controller");
const child_service_1 = require("./child.service");
const sequelize_1 = require("@nestjs/sequelize");
const child_model_1 = require("./child.model");
let ChildModule = class ChildModule {
};
exports.ChildModule = ChildModule;
exports.ChildModule = ChildModule = __decorate([
    (0, common_1.Module)({
        controllers: [child_controller_1.ChildController],
        providers: [child_service_1.ChildService],
        imports: [sequelize_1.SequelizeModule.forFeature([child_model_1.Child])],
    })
], ChildModule);
//# sourceMappingURL=child.module.js.map