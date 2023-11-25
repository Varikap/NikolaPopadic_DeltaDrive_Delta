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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const driver_service_1 = require("../drivers/driver.service");
const user_service_1 = require("../users/user.service");
const rating_entity_1 = require("./entities/rating.entity");
let RatingService = class RatingService {
    constructor(ratingRepository, userService, driverService) {
        this.ratingRepository = ratingRepository;
        this.userService = userService;
        this.driverService = driverService;
    }
    async findOneById(id) {
        const rating = await this.ratingRepository.findOneBy({ id });
        if (!rating) {
            throw new common_1.NotFoundException(`Rating with ID ${id} not found`);
        }
        return rating;
    }
    async findAllForUser(email) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return this.ratingRepository.find({
            where: { user },
            relations: ['driver'],
        });
    }
    async rate(email, ratingData) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        const driver = await this.driverService.findOneById(ratingData.driverId);
        if (!driver) {
            throw new common_1.NotFoundException(`Driver with ID ${ratingData.driverId} not found`);
        }
        const rating = new rating_entity_1.Rating();
        rating.value = ratingData.value;
        rating.comment = ratingData.comment;
        rating.user = user;
        rating.driver = driver;
        return this.ratingRepository.save(rating);
    }
    async findAll() {
        return this.ratingRepository.find();
    }
    async create(ratingData) {
        const rating = this.ratingRepository.create(ratingData);
        return this.ratingRepository.save(rating);
    }
    async update(id, updateData) {
        await this.findOneById(id);
        await this.ratingRepository.update(id, updateData);
        return this.findOneById(id);
    }
    async delete(id) {
        await this.findOneById(id);
        await this.ratingRepository.delete(id);
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        driver_service_1.DriverService])
], RatingService);
//# sourceMappingURL=rating.service.js.map