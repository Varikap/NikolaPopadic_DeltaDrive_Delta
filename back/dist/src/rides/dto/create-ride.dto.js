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
exports.CreateRideDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRideDto {
}
exports.CreateRideDto = CreateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45.2164,
        description: 'Latitude of the starting location',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "startLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 19.8483,
        description: 'Longitude of the starting location',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "startLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45.2234,
        description: 'Latitude of the ending location',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "endLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 19.8308,
        description: 'Longitude of the ending location',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "endLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25.0, description: 'Total price of the ride' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Id of the vehicle' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "vehicleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Id of the driver' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "driverId", void 0);
//# sourceMappingURL=create-ride.dto.js.map