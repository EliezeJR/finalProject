import { Author } from "src/author/entities/author.entity";
import { Category } from "src/category/entities/category.entity";
import { Gender } from "src/gender/entities/gender.entity";
import { Review } from "src/review/entities/review.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BooksImages } from "./book-image.entity";

@Entity()
export class Books {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @ManyToOne(() => Author, author => author.books)
    author: Author;

    @ManyToOne(()=> Gender, gender=> gender.books)
    gender:Gender;

    @ManyToOne(()=> Category, category=> category.books)
    category: Category;

    @Column({ type: 'varchar', nullable: false })
    publication_date: string;

    @Column({ type: 'varchar', nullable: false })
    descriptions: string;
   
    @Column({ type: 'int4', nullable: false })
    page_number: number;

    @Column({ type: 'numeric', nullable: false })
    price: number;

    @Column({ type: 'varchar', nullable: false })
    synopsis: string;

    @ManyToOne(()=> Review, review=> review.books)
    review: Review

    @OneToMany(()=> BooksImages, booksImages=> booksImages.books, {
        cascade: true,
        eager: true
    })

    images: BooksImages[];
}
