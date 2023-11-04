import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entities/category.entity";
import { Repository } from "typeorm";
import { CategoryDto } from "../dto/category.dto";

export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    ){}

    async getAllCategories(){
       try{
        return await this.categoryRepo.find();
       }
         catch(error){
              return {error: error.message || 'Something went wrong'}
         }
    }

    async getCategoryById(id: number){
       try{
        return await this.categoryRepo.findOneBy({id});
       }
            catch(error){
                return {error: error.message || 'Something went wrong'}
            }
    }

    async createCategory(categoryDto: CategoryDto){
        try{
            const newCategory = this.categoryRepo.create(categoryDto);
        return await this.categoryRepo.save(newCategory);
        }
        catch(error){
            return {error: error.message || 'Something went wrong'}
        }    
    }

    async updateCategory(id: number, categoryDto: CategoryDto){
       try{
        const category = await this.categoryRepo.preload({id, ...categoryDto});
        return await this.categoryRepo.save(category);
       }
            catch(error){
                return {error: error.message || 'Something went wrong'}
            }
    }
    async deleteCategory(id: number){
        try{
            return await this.categoryRepo.delete(id);
        }
        catch(error){
            return {error: error.message || 'Something went wrong'}
        }
    }
}