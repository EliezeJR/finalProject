import { InjectRepository } from '@nestjs/typeorm';
import { Gender } from '../entities/gender.entity';
import { Repository } from 'typeorm';
import { GenderDto } from '../dto/gender.dto';

export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private readonly gernderRepo: Repository<Gender>,
  ) {}

  async createGender(gender: GenderDto) {
    try {
      const newGender = await this.gernderRepo.create(gender);
      await this.gernderRepo.save(newGender);
      return newGender;
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async findAllGender() {
    try {
      return await this.gernderRepo.find();
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async findOneGender(id: number) {
    try {
      return await this.gernderRepo.findOneBy({ id });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async updateGender(id: number, gender: GenderDto) {
    try {
      await this.gernderRepo.update(id, gender);
      return await this.gernderRepo.findOneBy({ id });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async removeGender(id: number) {
    try {
      await this.gernderRepo.delete(id);
      return { deleted: true };
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }
}
