import { Product } from '../models/product.model.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return {
    totalProducts: products.length,
    products
  };
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
