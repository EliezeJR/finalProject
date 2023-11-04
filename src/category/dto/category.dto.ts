import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CategoryDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    slug: string;
}