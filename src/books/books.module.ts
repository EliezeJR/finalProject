import { Module } from "@nestjs/common";
import { BooksController } from "./controllers/books.controller";
import { BooksServives } from "./services/books.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Books } from "./entities/books.entity";
import { BooksImages } from "./entities/book-image.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Books, BooksImages]),
    ],
    controllers: [
        BooksController
    ],
    providers: [
        BooksServives
    ]
})
export class BooksModule {}