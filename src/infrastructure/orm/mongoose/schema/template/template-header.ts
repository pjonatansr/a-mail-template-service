import { mongoose } from '../../mongoose';
import { groupSchema } from '../group/group';

export const headerSchema = new mongoose.Schema({
    bcc: {
        type: [groupSchema],
        required: false,
    },
    cc: {
        type: [groupSchema],
        required: false,
    },
    to: [groupSchema],
});

const mongooseTemplate = mongoose.model('Header', headerSchema);

export default mongooseTemplate;
