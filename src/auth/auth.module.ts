import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { ChildModule } from "src/child/child.module";  // Импортируем ChildModule

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    ChildModule,  // Добавляем ChildModule в imports
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "secret",
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
})
export class AuthModule {}
