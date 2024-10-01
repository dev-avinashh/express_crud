import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
    trim: true
  },
  quantity: {
    type: Number,
    required: true,  
    min: 0           
  },
  price: {
    type: Number,
    required: true,  
    min: 0         
  },
  image: {
    type: String,    
    default: null
  }
}, {
  timestamps: true   
});


export const Product = mongoose.model('Product', productSchema);

