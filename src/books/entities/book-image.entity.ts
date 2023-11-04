import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Books } from './books.entity';

@Entity()
export class BooksImages {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  url: string;


  @ManyToOne(() => Books, (books) => books.images,{
    onDelete: 'CASCADE',
  })
  books: Books;
}