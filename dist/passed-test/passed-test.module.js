"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassedTestModule = void 0;
const common_1 = require("@nestjs/common");
const passed_test_controller_1 = require("./passed-test.controller");
const passed_test_service_1 = require("./passed-test.service");
const sequelize_1 = require("@nestjs/sequelize");
const passed_test_model_1 = require("./passed-test.model");
let PassedTestModule = class PassedTestModule {
};
exports.PassedTestModule = PassedTestModule;
exports.PassedTestModule = PassedTestModule = __decorate([
    (0, common_1.Module)({
        controllers: [passed_test_controller_1.PassedTestController],
        providers: [passed_test_service_1.PassedTestService],
        imports: [sequelize_1.SequelizeModule.forFeature([passed_test_model_1.PassedTest])],
    })
], PassedTestModule);
//# sourceMappingURL=passed-test.module.js.map