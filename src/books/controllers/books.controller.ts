import { Controller, Get, Post, Param, Body, Patch, ParseIntPipe, Delete } from '@nestjs/common';
import { BooksServives } from '../services/books.service';
import { CreateBookDto } from '../dto/books.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService:BooksServives){}

    @Get()
     getBooks(){

        return  this.booksService.findAllBook();

    }

    @Get(':id')
    getBook(id: number){
        return  this.booksService.findOneBook(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
      return this.booksService.createBook(createBookDto);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: CreateBookDto) {
      return this.booksService.updateBook(id, updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.booksService.removeBook(id);
    }
}