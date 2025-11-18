import express from 'express';
import cors from 'cors';
import teamRoutes from './routes/team.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/teams', teamRoutes);

app.get('/', (req, res) => res.send('Teams Service funcionando 🚀'));

export default app;
