import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import router from '../routes/router.js';

const app = express();

app.use(helmet());
app.use(compression({ level: 9 }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

export default app;
