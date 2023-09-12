import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel('Product') private readonly Product: Model<Product> ){}

  async addProduct(name: string, price: number): Promise<number> {
    const newProduct = new this.Product({name, price});
    const result = await newProduct.save();
    console.log(result);
    return result.id;
  }

  async getProducts() {
    return (await this.Product.find()) as Product[];
  }

  async getProduct(id: number) {
    const product = await this.Product.findById(id);
    if (!product) throw new NotFoundException('Product not found')
    return product as Product;
  }

}
