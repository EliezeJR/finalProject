import { Books } from "src/books/entities/books.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({type: 'varchar', length: 255})
    detail: string;

    @Column({type: 'int'})
    rating: number;

    @Column({type: 'varchar', length: 255})
    username: string;

    @OneToMany(()=> Books, books=> books.review)
    books: Books[]
}