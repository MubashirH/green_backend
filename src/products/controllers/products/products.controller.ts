import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductDto } from 'src/products/dtos/createProduct.dto';
import { UpdateProductDto } from 'src/products/dtos/udpateProduct.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
    //you need to always use a catch or then for the promise if you are not returning
    //as it has been deprecated and promise cannot be used without then/catch
    //   .then((res) => console.log(res));
  }

  //this is an update method which is using params
  //parseintpipe is used to validate the param and send error back
  @Put(':id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteProduct(id);
  }
}
