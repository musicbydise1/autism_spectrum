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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassedTest = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const child_model_1 = require("../child/child.model");
const test_model_1 = require("../test/test.model");
const user_model_1 = require("../user/user.model");
let PassedTest = class PassedTest extends sequelize_typescript_1.Model {
};
exports.PassedTest = PassedTest;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], PassedTest.prototype, "passed_test_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PassedTest.prototype, "parentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], PassedTest.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => test_model_1.Test),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PassedTest.prototype, "testId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => test_model_1.Test),
    __metadata("design:type", test_model_1.Test)
], PassedTest.prototype, "test", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => child_model_1.Child),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PassedTest.prototype, "childId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => child_model_1.Child),
    __metadata("design:type", child_model_1.Child)
], PassedTest.prototype, "child", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PassedTest.prototype, "testPoints", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], PassedTest.prototype, "notes", void 0);
exports.PassedTest = PassedTest = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "passedtests" })
], PassedTest);
//# sourceMappingURL=passed-test.model.js.map