import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GenderDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}