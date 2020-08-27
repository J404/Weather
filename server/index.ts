import * as Express from 'express';
import * as fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

const CORS = require('cors');

const app = Express();
const PORT = process.env.PORT || 5000;

app.use(CORS());
app.use(Express.json());
app.use('/', Express.static(path.join(__dirname, '../build')));


app.get('/weather', async (req: Express.Request, res: Express.Response) => {
    const key = process.env.API_KEY;

    // For now, lat & lon are hardcoded
    // TODO: send lat/lon through route params
    const apiRes: Promise<Response> = await fetch(`https://api.darksky.net/forecast/${key}/41.499321,-81.694359`, {});
    const { currently, hourly, daily } = await (await apiRes).json();

    res.json({ data: { currently, hourly, daily }});
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);