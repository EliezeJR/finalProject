import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewController } from './controller/review.controller';
import { ReviewServices } from './services/review.service';
@Module({
    imports: [TypeOrmModule.forFeature([Review])],
    controllers: [ReviewController],
    providers: [ReviewServices],

})
export class ReviewModule {}