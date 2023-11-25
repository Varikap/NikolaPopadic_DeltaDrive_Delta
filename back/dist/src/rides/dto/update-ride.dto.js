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
exports.UpdateRideDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateRideDto {
}
exports.UpdateRideDto = UpdateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45.2164,
        description: 'Updated latitude of the starting location',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "startLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 19.8483,
        description: 'Updated longitude of the starting location',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "startLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45.2234,
        description: 'Updated latitude of the ending location',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "endLocationLatitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 19.8308,
        description: 'Updated longitude of the ending location',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "endLocationLongitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 30.0,
        description: 'Updated total price of the ride',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "totalPrice", void 0);
//# sourceMappingURL=update-ride.dto.js.map