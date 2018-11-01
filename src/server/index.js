import express from 'express';
import renderer from './helper/renderer';
const app = express();


app.use(express.static('public'));
app.get('*', (req, res) => {
    const context = {};
    const content = renderer(req, context)

    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})