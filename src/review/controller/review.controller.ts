import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ReviewServices } from '../services/review.service';
import { ReviewDto } from '../dto/review.dto';
@Controller('review')
export class ReviewController {
    constructor(private readonly reviweService:ReviewServices) {}

    @Get()
    getAllReviews(){
        return  this.reviweService.getAllReviews();
    }

    @Get(':id')
    getReviewById(id: number){
        return this.reviweService.getReviewById(id);
    }

    @Post()
    createReview(
        @Body() review: ReviewDto
    ){
        return this.reviweService.createReview(review);
    }

    @Patch()
    updateReview(
        @Param('id') id: number,
        @Body() review: ReviewDto
    ){
        return this.reviweService.updateReview(id, review);
    }
}