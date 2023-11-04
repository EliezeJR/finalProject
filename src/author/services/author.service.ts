import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorDto } from '../dto/author.dto';

export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(author: AuthorDto) {
    try {
      const newAuthor = await this.authorRepository.create(author);
      await this.authorRepository.save(newAuthor);
      return newAuthor;
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async findAll() {
    try {
      return await this.authorRepository.find();
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async findOne(id: number) {
    try {
      return await this.authorRepository.findOne({ where: { id } });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async update(id: number, author: AuthorDto) {
    try {
      await this.authorRepository.update(id, author);
      return await this.authorRepository.findOne({ where: { id } });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async remove(id: number) {
    try {
      await this.authorRepository.delete(id);
      return { deleted: true };
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }
}
