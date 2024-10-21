"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const console_1 = require("console");
const helmet_1 = require("helmet");
const dotenv = require("dotenv");
dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    await app.listen(3000, () => {
        (0, console_1.log)("Service started on port " + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map