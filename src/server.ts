import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import apiRouter from './routes/api.router';
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/', express.static(__dirname + '/../public'));
app.use('/api', apiRouter);

app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}...`));

export default app;