import dotenv from 'dotenv';
import express from 'express';
import vite from '../config/vite.js';

dotenv.config({ path: '.env.local' });

const app = express();

app.use(express.json());

await vite(express, app);

if (process.env.Serverless !== 'Yes') {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

export default app;
