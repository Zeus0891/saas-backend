import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRoutes from './routes/client.routes';
import { errorHandler } from './middlewares/errorHandler'; // 👈 Agrega esto

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);

// Error handling middleware (después de las rutas)
app.use(errorHandler);

// Root route
app.get('/', (_req, res) => {
  res.send('API is running...');
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
