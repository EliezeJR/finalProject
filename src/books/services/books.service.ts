import { InjectRepository } from '@nestjs/typeorm';
import { Books } from '../entities/books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../dto/books.dto';
import { BooksImages } from '../entities/book-image.entity';

export class BooksServives {
  constructor(
    @InjectRepository(Books)
    private readonly booksRepo: Repository<Books>,
    @InjectRepository(BooksImages)
    private readonly booksImagesRepo: Repository<BooksImages>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Books> {
    const {
      images = [],
      review,
      category,
      gender,
      author,
      ...booksData
    } = createBookDto;
    const newBook = this.booksRepo.create({
      ...booksData,
      author,
      gender,
      category,
      review,
      images: images.map((image) =>
        this.booksImagesRepo.create({ url: image }),
      ),
    });
    return await this.booksRepo.save(newBook);
  }

  findAllBook() {
    try {
      return this.booksRepo.find({
        relations: ['author', 'gender', 'category', 'review'],
      });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async findOneBook(id: number) {
    try {
      return await this.booksRepo.findOne({
        where: { id },
      });
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async updateBook(id: number, bookDto: CreateBookDto) {
    try {
      const { images = [], ...bookData } = bookDto;
      const bookImages = images.map((image) =>
        this.booksImagesRepo.create({ url: image }),
      );
      const book = await this.booksRepo.preload({
        id,
        ...bookData,
        images: bookImages,
      });
      return await this.booksRepo.save(book);
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }

  async removeBook(id: number) {
    try {
      const book = await this.booksRepo.findOne({ where: { id } });
      return await this.booksRepo.remove(book);
    } catch (error) {
      return { error: error.message || 'Something went wrong' };
    }
  }
}
