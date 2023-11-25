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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_ride_dto_1 = require("./dto/create-ride.dto");
const ride_service_1 = require("./ride.service");
let RideController = class RideController {
    constructor(rideService) {
        this.rideService = rideService;
    }
    orderRide(req, body) {
        return this.rideService.orderRide(req.user.email, body);
    }
    markRideAsCompleted(id) {
        return this.rideService.markRideAsCompleted(id);
    }
    getCompletedRides(req) {
        return this.rideService.findAllCompleted(req.user.email);
    }
};
exports.RideController = RideController;
__decorate([
    (0, common_1.Post)('order-ride'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_ride_dto_1.CreateRideDto]),
    __metadata("design:returntype", void 0)
], RideController.prototype, "orderRide", null);
__decorate([
    (0, common_1.Post)('complete-ride/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RideController.prototype, "markRideAsCompleted", null);
__decorate([
    (0, common_1.Get)('get-completed-rides'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RideController.prototype, "getCompletedRides", null);
exports.RideController = RideController = __decorate([
    (0, common_1.Controller)('ride'),
    (0, common_1.Controller)('ride'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiTags)('ride'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [ride_service_1.RideService])
], RideController);
//# sourceMappingURL=ride.controller.js.map