import bodyParser from 'body-parser';
import express from 'express';

import { router as templateRouter } from '../interfaces/routes/template';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, _, next): void => {
    console.log(`${req.method} - ${req.path} - `, req.query);
    next();
});

app.use('/api', templateRouter);

app.listen(
    process.env.PORT || 3000,
    () => {
        console.log('The app is listening.');
    },
);
