import { Template } from '@entities/template';
import TemplateRepository from '@entities/templateRepository';
import MongooseTemplate from '@schema/template';
import { ITemplate, TemplateOrError } from '@types';
import { Right } from 'src/shared/either';

export class TemplateRepositoryMongo extends TemplateRepository {
    async persist(template: Template): Promise<TemplateOrError> {
        try {
            const mongooseTemplate = new MongooseTemplate({
                ...template,
            });

            const result = { template: null };
            await mongooseTemplate
                .save()
                .then((templateData: unknown): void => {
                    result.template = templateData;
                });

            return Right<Template>(result.template);
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: template,
            });
        }
    }

    async get(_id: string): Promise<TemplateOrError> {
        try {
            const mongooseTemplate: ITemplate = await MongooseTemplate.findById(
                _id,
            );

            const templateOrError: TemplateOrError = Template.create(mongooseTemplate);

            return templateOrError;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: _id,
            });
        }
    }

    async list(): Promise<TemplateOrError[]> {
        try {
            const templatesOrErrors: TemplateOrError[] = (
                await MongooseTemplate.find()
            ).map((template: ITemplate) => Template.create(template));

            return templatesOrErrors;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
            });
        }
    }
}

export default TemplateRepositoryMongo;
