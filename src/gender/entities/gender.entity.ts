import { Books } from "src/books/entities/books.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gender{
    @PrimaryGeneratedColumn({type: 'int'})
    id:number

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar'})
    description: string;

    @OneToMany(()=> Books, books=> books.gender)
    books: Books[]
}