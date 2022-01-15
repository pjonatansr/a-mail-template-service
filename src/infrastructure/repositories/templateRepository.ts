import {
    ILogger, IRepository,
} from 'src/common/types';
import { Template } from 'src/entities/template/template';

export class TemplateRepository implements IRepository {
    private readonly logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    async persist(template: Template): Promise<Template> {
        try {
            // Trying to persist
        } catch (e) {
            this.logger.logError(e);
        }

        return template;
    }

    async get(_id: string): Promise<Template> {
        try {
            const id = _id;
            // Trying to get the template
        } catch (e) {
            this.logger.logError(e);
        }

        return null;
    }

    async list(): Promise<Template[]> {
        try {
            // Trying to get the templates
        } catch (e) {
            this.logger.logError(e);
        }

        return null;
    }
}

export default TemplateRepository;
