import express from 'express';
import renderer from './helper/renderer';
import Loadable from 'react-loadable';
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

Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log('Running on http://localhost:3000/');
    })
});
