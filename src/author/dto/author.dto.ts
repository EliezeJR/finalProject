import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AuthorDto{
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    dateOfBirth: string;

    @IsString() 
    @IsNotEmpty()
    nationality: string;

    @IsString()
    @IsOptional()
    biography: string;
}