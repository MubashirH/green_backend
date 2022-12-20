import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/typeorm';
import { CreateProductParams, UpdateProductParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    //here we are using this injector for communicating with the database
    //and also using a Class called Repository which extends your entity
    //and futher can be used to update,delete,add to your database
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  getProducts() {
    //this will get all the products from the database and
    //if you pass any parameter, it can be used to filter
    return this.productsRepository.find();
  }

  createProduct(productDetails: CreateProductParams) {
    //this will create a new product and is not async
    const newProduct = this.productsRepository.create({
      ...productDetails,
      createdAt: new Date(),
    });

    //this will save the new product into the database and its async so it returns a promise
    return this.productsRepository.save(newProduct);
  }

  updateProduct(id: number, updateProductDetails: UpdateProductParams) {
    return this.productsRepository.update({ id }, { ...updateProductDetails });
  }

  deleteProduct(id: number) {
    return this.productsRepository.delete({ id });
  }
}
