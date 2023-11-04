import { Controller, Post, Body, Get, Patch, ParseIntPipe, Param } from '@nestjs/common';
import { GenderService } from '../services/gender.service';
import { GenderDto } from '../dto/gender.dto';
@Controller('gender')
export class GenderController {
    constructor(private readonly genderService: GenderService){}

    @Post()
    createGender(@Body() genderDto: GenderDto){
        return this.genderService.createGender(genderDto)
    }

    @Get()
    findAllGender(){
        return this.genderService.findAllGender()
    }

    @Get(':id')
    findOneGender(id:number){
        return this.genderService.findOneGender(id)
    }

    @Patch(':id')
    updateGender
    (
        @Param('id', ParseIntPipe) id: number,
        @Body() genderDto: GenderDto,
    ){
        return this.genderService.updateGender(id, genderDto)
    }

}