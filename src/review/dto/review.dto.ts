import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ReviewDto{
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    detail: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsString()
    @IsNotEmpty()
    username: string;

}