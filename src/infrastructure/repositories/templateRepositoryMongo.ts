import { DatabaseError } from 'src/common/errors/databaseError';
import { Either } from 'src/common/types';
import { Template } from 'src/entities/template/template';
import TemplateRepository from 'src/entities/template/templateRepository';

export class TemplateRepositoryMongo extends TemplateRepository {
    async persist(template: Template): Promise<Either<DatabaseError, Template>> {
        try {
            //
        } catch (e) {
            this.logger.logError(e);
        }

        return null;
    }

    async get(_id: string): Promise<Either<DatabaseError, Template>> {
        try {
            // Trying to get the template
        } catch (e) {
            this.logger.logError(e);
        }

        return null;
    }

    async list(): Promise<Either<DatabaseError, Template[]>> {
        try {
            // Trying to get the templates
        } catch (e) {
            this.logger.logError(e);
        }

        return null;
    }
}

export default TemplateRepository;
