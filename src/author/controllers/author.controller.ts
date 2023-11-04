import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { AuthorService } from "../services/author.service";
import { AuthorDto } from '../dto/author.dto';

@Controller('author')
export class AuthorController{
    constructor(private readonly authorService: AuthorService){}

    @Get()
    getAuthor(){
        return this.authorService.findAll();
    }

    @Get(':id')
    getOneAuthor(id: number){
        return this.authorService.findOne(id);
    }

    @Post()
    createAuthor(@Body() authorDto: AuthorDto){
        return this.authorService.create(authorDto);
    }

    @Patch(':id')
    updateAuthor(
        @Param('id', ParseIntPipe) id: number,
        @Body() authorDto: AuthorDto,
    ){
        return this.authorService.update(id, authorDto);
    }

    @Delete(':id')
    removeAuthor(@Param('id', ParseIntPipe) id: number){
        return this.authorService.remove(id);
    }
}