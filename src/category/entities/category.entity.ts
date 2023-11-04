import { Books } from "src/books/entities/books.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  slug: string;

  @BeforeInsert()
  generateSlug() {
    this.slug = this.name.toLowerCase().replace(/\s+/g, '-');
  }

  @OneToMany(() => Books, books => books.category)
    books: Books[]
}
