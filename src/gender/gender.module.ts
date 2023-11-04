import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gender } from "./entities/gender.entity";
import { GenderController } from "./controllers/gender.controller";
import { GenderService } from "./services/gender.service";

@Module({
    imports: [TypeOrmModule.forFeature([Gender])],
    controllers: [GenderController],
    providers: [GenderService]
})

export class GenderModule{}