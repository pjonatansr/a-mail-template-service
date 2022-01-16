import { mongoose } from '../../mongoose';
import { bodySchema } from './template-body';
import { headerSchema } from './template-header';

const templateSchema = new mongoose.Schema({
    body: bodySchema,
    header: headerSchema,
    title: String,
});

const mongooseTemplate = mongoose.model('Template', templateSchema);

export default mongooseTemplate;
