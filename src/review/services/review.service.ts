import { InjectRepository } from '@nestjs/typeorm';
import { Review } from '../entities/review.entity';
import { Repository } from 'typeorm';
import { ReviewDto } from '../dto/review.dto';

export class ReviewServices {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) {}

  async getAllReviews() {
    try {
      return await this.reviewRepo.find();
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async getReviewById(id: number) {
    try {
      return await this.reviewRepo.findOneBy({ id });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async createReview(review: ReviewDto) {
    try {
      return await this.reviewRepo.save(review);
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async updateReview(id: number, review: ReviewDto) {
    try {
      return await this.reviewRepo.update(id, review);
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async deleteReview(id: number) {
    try {
      return await this.reviewRepo.delete(id);
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }
}
