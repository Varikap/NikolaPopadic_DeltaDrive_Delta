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
exports.RideDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const vehicle_dto_1 = require("../../vehicles/dto/vehicle.dto");
const driver_dto_1 = require("../../drivers/dto/driver.dto");
class RideDto {
}
exports.RideDto = RideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier for the ride' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: vehicle_dto_1.VehicleDto,
        description: 'Details of the booked vehicle',
    }),
    __metadata("design:type", vehicle_dto_1.VehicleDto)
], RideDto.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: driver_dto_1.DriverDto, description: 'Details of the driver' }),
    __metadata("design:type", driver_dto_1.DriverDto)
], RideDto.prototype, "driver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 40.7128,
        description: 'Current latitude position of the start location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "startLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: -74.006,
        description: 'Current longitude position of the start location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "startLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 34.0522,
        description: 'Current latitude position of the end location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "endLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: -118.2437,
        description: 'Current longitude position of the end location',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "endLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Total price of the ride' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RideDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['pending', 'completed'],
        example: 'completed',
        description: 'Status of the ride',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RideDto.prototype, "status", void 0);
//# sourceMappingURL=ride.dto.js.map