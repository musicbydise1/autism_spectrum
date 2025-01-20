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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const test_model_1 = require("./test.model");
let TestService = class TestService {
    constructor(testModel) {
        this.testModel = testModel;
    }
    async createTest(testName) {
        return this.testModel.create({ testName });
    }
    async findAll() {
        return this.testModel.findAll();
    }
    async findOne(testId) {
        const options = { where: { testId } };
        return this.testModel.findOne(options);
    }
    async updateTest(id, testName) {
        const test = await this.findOne(id);
        if (!test) {
            throw new Error('Test not found');
        }
        test.testName = testName;
        await test.save();
    }
    async deleteTest(id) {
        const test = await this.findOne(id);
        if (!test) {
            throw new Error('Test not found');
        }
        await test.destroy();
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(test_model_1.Test)),
    __metadata("design:paramtypes", [Object])
], TestService);
//# sourceMappingURL=test.service.js.map