import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helper';
import { Response } from 'express';
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/books/',
        filename: fileNamer,
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Asegurese que el archivo es una imagen');
    }

    const url = `${file.filename}`;

    return { url };
  }

  @Get('book/:imageName')
  findBook(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.filesService.getStaticImageName(imageName);
    res.sendFile(path);
  }
}
