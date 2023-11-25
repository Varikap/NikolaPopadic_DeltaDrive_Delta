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
exports.VehicleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class VehicleDto {
}
exports.VehicleDto = VehicleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toyota', description: 'Brand of the vehicle' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehicleDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name of the driver' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehicleDto.prototype, "driverFirstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name of the driver' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VehicleDto.prototype, "driverLastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 40.7128,
        description: 'Current latitude position of the vehicle',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VehicleDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: -74.006,
        description: 'Current longitude position of the vehicle',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VehicleDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, description: 'Starting price of the ride' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VehicleDto.prototype, "startPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.5, description: 'Price per km for the ride' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], VehicleDto.prototype, "pricePerKm", void 0);
//# sourceMappingURL=vehicle.dto.js.map