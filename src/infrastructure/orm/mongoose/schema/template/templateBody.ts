import { mongoose } from '../../mongoose';

export const bodySchema = new mongoose.Schema({
    content: String,
    signature: {
        type: String,
        required: false,
    },
});

const mongooseTemplate = mongoose.model('Body', bodySchema);

export default mongooseTemplate;
