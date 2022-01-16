import { Template } from '@entities/template';
import { ILogger, IRepository } from '@types';
import CreateTemplate from 'src/application/use_cases/template/createTemplate';
import GetTemplate from 'src/application/use_cases/template/getTemplate';
import ListTemplates from 'src/application/use_cases/template/listTemplates';
import TemplateRepository from 'src/infrastructure/repositories/templateRepositoryMongo';

const logger: ILogger = {
    logError(error: Error): void {
        console.log(error.message);
    },
};

const createTemplate = async ({ params }): Promise<Template | Error> => {
    const repository: IRepository = new TemplateRepository(logger);

    const templateCreated = await CreateTemplate({ ...params }, repository);

    return templateCreated;
};

const getTemplate = async ({ query }): Promise<Template | Error> => {
    const repository: IRepository = new TemplateRepository(logger);

    const template = await GetTemplate({ ...query }, repository);

    return template;
};

const listTemplates = async (): Promise<Template[] | Error> => {
    const repository: IRepository = new TemplateRepository(logger);

    const templates = await ListTemplates(repository);

    return templates;
};

export { createTemplate, getTemplate, listTemplates };
