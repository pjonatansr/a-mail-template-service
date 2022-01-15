import CreateTemplate from 'src/application/use_cases/template/createTemplate';
import { GetTemplate } from 'src/application/use_cases/template/getTemplate';
import { ILogger, IRepository } from 'src/common/types';
import { Template } from 'src/entities/template/template';
import TemplateRepository from 'src/infrastructure/repositories/templateRepository';

const logger: ILogger = {
    logError(error: Error): void {
        console.log(error.message);
    },
};

const createTemplate = async (
    { params },
): Promise<Template> => {
    const repository: IRepository = new TemplateRepository(logger);

    const templateCreated = await CreateTemplate({ ...params }, repository);

    return templateCreated;
};

const getTemplate = async ({ query }): Promise<Template> => {
    const repository: IRepository = new TemplateRepository(logger);

    const template = await GetTemplate({ ...query }, repository);

    return template;
};

const listTemplates = async (): Promise<Template[]> => {
    throw new Error('Method not implemented');
};

export {
    createTemplate, getTemplate, listTemplates,
};
