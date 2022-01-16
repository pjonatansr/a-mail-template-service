import { Template } from '@entities/template';
import { ILogger, IRepository } from '@types';
import CreateTemplate from 'src/application/use_cases/template/create-template';
import GetTemplate from 'src/application/use_cases/template/get-template';
import ListTemplates from 'src/application/use_cases/template/list-templates';
import TemplateRepository from 'src/infrastructure/repositories/template-repository-mongo';

export class TemplateController {
}

const logger: ILogger = {
    logError(error: Error): void {
        console.log(error.message);
    },
};

const createTemplate = async ({ body }): Promise<Template | Error> => {
    const repository: IRepository = new TemplateRepository(logger);

    const templateCreated = await CreateTemplate({ ...body }, repository);

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
