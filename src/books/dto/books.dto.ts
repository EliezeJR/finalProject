// books.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate, IsObject, IsArray, IsOptional } from 'class-validator';
import { Author } from 'src/author/entities/author.entity';
import { Review } from 'src/review/entities/review.entity';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsObject()
  author: Author;
  
  @IsNotEmpty()
  @IsObject()
  gender: Author;

  @IsNotEmpty()
  @IsObject()
  category: Author;

  @IsString()
  @IsNotEmpty()
  publication_date: string;

  @IsString()
  @IsNotEmpty()
  descriptions: string;

  @IsNumber()
  @IsNotEmpty()
  page_number: number;

  @IsString()
  @IsNotEmpty()
  synopsis: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsObject()
  review: Review;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
