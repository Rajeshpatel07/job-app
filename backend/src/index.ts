import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import { PrismaClient } from '@prisma/client';
dotenv.config();

export const app = express();
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started at port ${port}`));
