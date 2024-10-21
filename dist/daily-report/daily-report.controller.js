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
exports.DailyReportController = void 0;
const common_1 = require("@nestjs/common");
const daily_report_service_1 = require("./daily-report.service");
const create_daily_report_dto_1 = require("./Dto/create.daily-report.dto");
let DailyReportController = class DailyReportController {
    constructor(dailyReportService) {
        this.dailyReportService = dailyReportService;
    }
    async create(createDailyReportDto) {
        return this.dailyReportService.create(createDailyReportDto);
    }
    async findByParentAndChild(parentId, childId) {
        return this.dailyReportService.findByParentAndChild(parentId, childId);
    }
    async findByChild(childId) {
        return this.dailyReportService.findByChild(childId);
    }
    async findByParent(parentId) {
        return this.dailyReportService.findByParent(parentId);
    }
};
exports.DailyReportController = DailyReportController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_daily_report_dto_1.CreateDailyReportDto]),
    __metadata("design:returntype", Promise)
], DailyReportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("parent/:parentId/child/:childId"),
    __param(0, (0, common_1.Param)("parentId")),
    __param(1, (0, common_1.Param)("childId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DailyReportController.prototype, "findByParentAndChild", null);
__decorate([
    (0, common_1.Get)("child/:childId"),
    __param(0, (0, common_1.Param)("childId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DailyReportController.prototype, "findByChild", null);
__decorate([
    (0, common_1.Get)("parent/:parentId"),
    __param(0, (0, common_1.Param)("parentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DailyReportController.prototype, "findByParent", null);
exports.DailyReportController = DailyReportController = __decorate([
    (0, common_1.Controller)("daily-report"),
    __metadata("design:paramtypes", [daily_report_service_1.DailyReportService])
], DailyReportController);
//# sourceMappingURL=daily-report.controller.js.map