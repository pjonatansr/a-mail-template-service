import { mongoose } from '../../mongoose';
import { bodySchema } from './templateBody';
import { headerSchema } from './templateHeader';

const templateSchema = new mongoose.Schema({
    body: bodySchema,
    header: headerSchema,
    title: String,
});

const mongooseTemplate = mongoose.model('Template', templateSchema);

export default mongooseTemplate;
