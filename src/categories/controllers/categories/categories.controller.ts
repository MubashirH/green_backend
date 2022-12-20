import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesDto } from 'src/categories/dtos/categories.dto';
import { CategoriesService } from 'src/categories/service/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}
  @Get()
  async getCategories() {
    return this.categoryService.getCategories();
  }

  @Post()
  createProduct(@Body() categoriesDto: CategoriesDto) {
    return this.categoryService.createCategory(categoriesDto);
    //you need to always use a catch or then for the promise if you are not returning
    //as it has been deprecated and promise cannot be used without then/catch
    //   .then((res) => console.log(res));
  }

  //this is an update method which is using params
  //parseintpipe is used to validate the param and send error back
  @Patch(':id')
  updateCategoryById(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoriesDto: CategoriesDto,
  ) {
    return this.categoryService.updateCategory(id, categoriesDto);
  }

  @Delete(':id')
  deleteCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
