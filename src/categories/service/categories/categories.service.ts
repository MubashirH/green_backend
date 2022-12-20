import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/typeorm';
import { CreateCategoryParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  getCategories() {
    return this.categoriesRepository.find();
  }

  createCategory(categoryDetails: CreateCategoryParams) {
    const newCategory = this.categoriesRepository.create({
      ...categoryDetails,
      createdAt: new Date(),
    });
    return this.categoriesRepository.save(newCategory);
  }

  updateCategory(id: number, categoryDetails: CreateCategoryParams) {
    return this.categoriesRepository.update({ id }, { ...categoryDetails });
  }

  deleteCategory(id: number) {
    return this.categoriesRepository.delete({ id });
  }
}
