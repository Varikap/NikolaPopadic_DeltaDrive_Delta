"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesModule = void 0;
const common_1 = require("@nestjs/common");
const ride_service_1 = require("./ride.service");
const ride_controller_1 = require("./ride.controller");
const ride_entity_1 = require("./entities/ride.entity");
const typeorm_1 = require("@nestjs/typeorm");
const drivers_module_1 = require("../drivers/drivers.module");
const vehicles_module_1 = require("../vehicles/vehicles.module");
const users_module_1 = require("../users/users.module");
let RidesModule = class RidesModule {
};
exports.RidesModule = RidesModule;
exports.RidesModule = RidesModule = __decorate([
    (0, common_1.Module)({
        providers: [ride_service_1.RideService],
        controllers: [ride_controller_1.RideController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ride_entity_1.Ride]),
            users_module_1.UsersModule,
            vehicles_module_1.VehiclesModule,
            drivers_module_1.DriversModule,
        ],
    })
], RidesModule);
//# sourceMappingURL=rides.module.js.map