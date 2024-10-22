"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const user_module_1 = require("./user/user.module");
const user_model_1 = require("./user/user.model");
const auth_module_1 = require("./auth/auth.module");
const child_module_1 = require("./child/child.module");
const passed_test_module_1 = require("./passed-test/passed-test.module");
const child_model_1 = require("./child/child.model");
const passed_test_model_1 = require("./passed-test/passed-test.model");
const note_module_1 = require("./note/note.module");
const note_model_1 = require("./note/note.model");
const feedback_module_1 = require("./feedback/feedback.module");
const feedback_model_1 = require("./feedback/feedback.model");
const test_module_1 = require("./test/test.module");
const test_model_1 = require("./test/test.model");
const daily_report_module_1 = require("./daily-report/daily-report.module");
const daily_report_model_1 = require("./daily-report/daily-report.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        exports: [],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.DB_HOST || "localhost",
                port: Number(process.env.DB_PORT) || 5432,
                username: process.env.DB_USER || "postgres",
                password: process.env.DB_PASSWORD || "root",
                database: process.env.DB_NAME || "damm",
                models: [user_model_1.User, child_model_1.Child, passed_test_model_1.PassedTest, note_model_1.Note, feedback_model_1.Feedback, test_model_1.Test, daily_report_model_1.DailyReport],
                autoLoadModels: true,
                synchronize: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            child_module_1.ChildModule,
            passed_test_module_1.PassedTestModule,
            note_module_1.NoteModule,
            feedback_module_1.FeedbackModule,
            test_module_1.TestModule,
            daily_report_module_1.DailyReportModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map