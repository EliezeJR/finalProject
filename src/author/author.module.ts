import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { AuthorController } from "./controllers/author.controller";
import { AuthorService } from "./services/author.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Author])
    ],
    controllers:[
        AuthorController
    ],
    providers:[
        AuthorService
    ]
})
export class AuthorModule{}
