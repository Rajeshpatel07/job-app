import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { expand } from 'dotenv-expand';
import router from './routes/routes.js';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const ENV = dotenv.config({ path: path.join(import.meta.dirname, '../../.env') });
expand(ENV)

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL)


export const app = express();
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started at port ${port}`));
