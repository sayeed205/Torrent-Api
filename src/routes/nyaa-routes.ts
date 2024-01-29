import { Hono } from 'hono';
import Nyaa from 'nyaa-si';

const app = new Hono();

app.get('/', async c => {
    const nyaa = new Nyaa();
    const torrents = await nyaa.search('');
    return c.json(torrents);
});

export const nyaaRouter = app;
