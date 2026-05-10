import { CategoryService } from './category.service';
import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
   constructor(private readonly categoryService: CategoryService){}
    
     @Get()
     getAllCategories(){
        return this.categoryService.getCategories();
     }
}
