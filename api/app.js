import express from 'express';
import logger from 'morgan';
import appRoutes from './routes/index';
import { optionsMiddleware, responseMiddleware, notFoundMiddleware } from './middlewares';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', appRoutes);
app.use(optionsMiddleware);
app.use(responseMiddleware);
app.use(notFoundMiddleware);

export default app;
