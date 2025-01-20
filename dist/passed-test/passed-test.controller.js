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
exports.PassedTestController = void 0;
const common_1 = require("@nestjs/common");
const passed_test_service_1 = require("./passed-test.service");
const pass_test_dto_1 = require("./Dto/pass-test.dto");
let PassedTestController = class PassedTestController {
    constructor(testService) {
        this.testService = testService;
    }
    endTest(passedTest) {
        return this.testService.submitTest(passedTest);
    }
    async getPassedTestsByParent(parentId) {
        return this.testService.getPassedTestsByParent(parentId);
    }
    async getAllPassedTests() {
        return this.testService.getAllPassedTests();
    }
};
exports.PassedTestController = PassedTestController;
__decorate([
    (0, common_1.Post)("/submitTest"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pass_test_dto_1.default]),
    __metadata("design:returntype", void 0)
], PassedTestController.prototype, "endTest", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("parentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PassedTestController.prototype, "getPassedTestsByParent", null);
__decorate([
    (0, common_1.Get)("/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassedTestController.prototype, "getAllPassedTests", null);
exports.PassedTestController = PassedTestController = __decorate([
    (0, common_1.Controller)("passed-test"),
    __metadata("design:paramtypes", [passed_test_service_1.PassedTestService])
], PassedTestController);
//# sourceMappingURL=passed-test.controller.js.map