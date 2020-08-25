import * as Express from 'express';
import * as fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

const CORS = require('cors');

const app = Express();
const PORT = process.env.PORT || 5000;

app.use(CORS());
app.use(Express.json());

try {
    app.use(Express.static('../build'));
} catch(err) {
    console.log('Build folder not yet created');
}

app.get('/weather', async (req: Express.Request, res: Express.Response) => {
    const key = process.env.API_KEY;

    // For now, lat & lon are hardcoded
    // TODO: send lat/lon through route params
    const apiRes: Promise<Response> = await fetch(`https://api.darksky.net/forecast/${key}/41.505550,41.505550`, {});
    const { currently, daily } = await (await apiRes).json();

    res.json({ data: { currently, daily }});
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);