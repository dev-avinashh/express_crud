import express from 'express';
import productRoutes from '../CRUD/routes/productRoutes.js' 
import { connectDB } from './config/dbConfig.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes Middleware
app.use('/api/products', productRoutes);

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
