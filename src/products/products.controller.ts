import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(@Body('name') name: string, @Body('price') price: number) {
    const id = await this.productsService.addProduct(name, price);
    return { id };
  }

  @Get()
  async getProducts() {
    return await this.productsService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    return await this.productsService.getProduct(id);
  }
}
