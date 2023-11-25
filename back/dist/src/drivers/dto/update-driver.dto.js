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
exports.UpdateDriverDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateDriverDto {
}
exports.UpdateDriverDto = UpdateDriverDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name of the driver' }),
    (0, class_validator_1.IsString)({ message: 'First name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDriverDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name of the driver' }),
    (0, class_validator_1.IsString)({ message: 'Last name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Last name is required' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDriverDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456789',
        description: 'Phone number of the driver',
    }),
    (0, class_validator_1.IsString)({ message: 'Phone number must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDriverDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ABC123',
        description: 'License number of the driver',
    }),
    (0, class_validator_1.IsString)({ message: 'License number must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'License number is required' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDriverDto.prototype, "licenseNumber", void 0);
//# sourceMappingURL=update-driver.dto.js.map