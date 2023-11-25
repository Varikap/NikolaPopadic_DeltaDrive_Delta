"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const drivers_module_1 = require("../drivers/drivers.module");
const users_module_1 = require("../users/users.module");
const rating_entity_1 = require("./entities/rating.entity");
const rating_controller_1 = require("./rating.controller");
const rating_service_1 = require("./rating.service");
let RatingsModule = class RatingsModule {
};
exports.RatingsModule = RatingsModule;
exports.RatingsModule = RatingsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rating_controller_1.RatingController],
        providers: [rating_service_1.RatingService],
        imports: [typeorm_1.TypeOrmModule.forFeature([rating_entity_1.Rating]), users_module_1.UsersModule, drivers_module_1.DriversModule],
    })
], RatingsModule);
//# sourceMappingURL=ratings.module.js.map