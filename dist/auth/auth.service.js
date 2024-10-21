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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const console_1 = require("console");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(customerService, jwtService) {
        this.customerService = customerService;
        this.jwtService = jwtService;
    }
    async login(customerDto) {
        const customer = await this.validateCustomer(customerDto);
        const tkn = await this.generateToken(customer);
        (0, console_1.log)(tkn);
        return [tkn, customer];
    }
    async registration(customerDto) {
        const candidate = await this.customerService.findOneByEmail(customerDto.email);
        if (candidate) {
            throw new common_1.HttpException("Пользователь с таким email уже существует", common_1.HttpStatus.BAD_REQUEST);
        }
        const hash = await bcrypt.hash(customerDto.password, 5);
        const customer = await this.customerService.createUser({
            ...customerDto,
            password: hash,
        });
        const tkn = await this.generateToken(customer);
        (0, console_1.log)(tkn);
        return [tkn, customer];
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.user_id };
        return {
            token: this.jwtService.sign(payload),
        };
    }
    async validateCustomer(customerDto) {
        const customer = await this.customerService.findOneByEmail(customerDto.email);
        const password = await bcrypt.compare(customerDto.password, customer.password);
        if (customer && password) {
            return customer;
        }
        throw new common_1.UnauthorizedException({ message: "Некорректные данные" });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map