import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { log } from "console";
import helmet from "helmet";
import * as dotenv from "dotenv";

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  // Настройка CORS
  app.enableCors({
    origin: ['http://localhost:8080', 'https://adminspectrum.kz'], // Разрешенные источники
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000, () => {
    log("Service started on port " + PORT);
  });
}
bootstrap();
