import { mongoose } from '../../mongoose';
import { contactSchema } from '../contact/contact';

export const groupSchema = new mongoose.Schema({
    contacts: [contactSchema],
    groupName: {
        type: String,
        required: false,
    },
});

const mongooseTemplate = mongoose.model('Group', groupSchema);

export default mongooseTemplate;
