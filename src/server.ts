import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './routes/api.router';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api', apiRouter);
app.use('/', (req: Request, res: Response) => {
    res.send('Hello');
})

app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}...`));