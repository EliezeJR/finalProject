import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dto/category.dto';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  createCategory(@Body() category: CategoryDto) {
    return this.categoryService.createCategory(category);
  }

  @Patch(':id')
  updateCategory(@Param('id') id: number, @Body() category: CategoryDto) {
    return this.categoryService.updateCategory(id, category);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
