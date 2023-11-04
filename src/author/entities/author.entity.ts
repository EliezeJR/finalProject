import { Books } from "src/books/entities/books.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author{
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;
    
    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar'})
    dateOfBirth: string;

    @Column({type: 'varchar'})
    nationality: string;

    @Column({type: 'varchar'})
    biography: string;    

    @OneToMany(()=>Books
    , books=> books.author)
    books:Books[]
    
}