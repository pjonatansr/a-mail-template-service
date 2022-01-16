import mongoose from 'mongoose';

import { environment } from '../../config/enviroment';

mongoose.connect(environment.database?.url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to MongoDB database!');
});

export { mongoose };
