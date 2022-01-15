import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';

import { router as contactRouter } from '../interfaces/routes/contact';
import { router as groupRouter } from '../interfaces/routes/group';
import { router as templateRouter } from '../interfaces/routes/template';

const app = express();

// Location of your favicon in the filesystem.
app.use(favicon(path.join('public', 'images', 'favicon.ico')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, _, next): void => {
    console.log(`${req.method} - ${req.path} - `, req.query);
    next();
});

app.use('/api/template', templateRouter);
app.use('/api/group', groupRouter);
app.use('/api/contact', contactRouter);

app.listen(
    process.env.PORT || 3000,
    () => {
        console.log('The app is listening.');
    },
);
