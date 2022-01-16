import { mongoose } from '../../mongoose';

export const contactSchema = new mongoose.Schema({
    address: String,
    alias: String,
    personTitle: String,
});

const mongooseTemplate = mongoose.model('Contact', contactSchema);

export default mongooseTemplate;
