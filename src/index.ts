import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { nyaaRouter } from './routes';

const app = new Hono().basePath('/api');

app.use('*', logger());

app.get('/', async c => {
    return c.text('Hello World!');
});

app.route('/search/nyaa', nyaaRouter);

export default app;
