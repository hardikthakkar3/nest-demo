import * as mongoose from "mongoose";

export interface Product {
    name: string;
    price: number;
}

export const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
})