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
exports.DriverDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../users/dto/user.dto");
const vehicle_dto_1 = require("../../vehicles/dto/vehicle.dto");
const ride_dto_1 = require("../../rides/dto/ride.dto");
const rating_dto_1 = require("../../ratings/dto/rating.dto");
class DriverDto {
}
exports.DriverDto = DriverDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identifier for the driver' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DriverDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John',
        description: 'First name of the driver (from associated user)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DriverDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Doe',
        description: 'Last name of the driver (from associated user)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DriverDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        description: 'Phone number of the driver',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DriverDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ABC123',
        description: 'License number of the driver',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DriverDto.prototype, "licenseNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: user_dto_1.UserDto, description: 'Details of the associated user' }),
    __metadata("design:type", user_dto_1.UserDto)
], DriverDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: vehicle_dto_1.VehicleDto,
        description: 'Details of the associated vehicle',
    }),
    __metadata("design:type", vehicle_dto_1.VehicleDto)
], DriverDto.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ride_dto_1.RideDto,
        isArray: true,
        description: 'List of rides associated with the driver',
    }),
    __metadata("design:type", Array)
], DriverDto.prototype, "rides", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: rating_dto_1.RatingDto,
        isArray: true,
        description: 'List of ratings received by the driver',
    }),
    __metadata("design:type", Array)
], DriverDto.prototype, "ratings", void 0);
//# sourceMappingURL=driver.dto.js.map