import CreateTemplate from 'src/application/use_cases/template/createTemplate';
import { IRepository, ITemplate } from 'src/common/types';
import { Template } from 'src/entities/template/template';
import TemplateRepository from 'src/infrastructure/repositories/templateRepository';

const createTemplate = async (request: any): Promise<Template> => {
    const { ...templateData }: ITemplate = request.params;

    const repository: IRepository = TemplateRepository();

    const templateCreated = await CreateTemplate(templateData, repository);

    return templateCreated;
};

const getTemplate = async (request: unknown): Promise<Template> => {
    throw new Error('Method not implemented');
};

const listTemplates = async (request: unknown): Promise<Template[]> => {
    throw new Error('Method not implemented');
};

export {
    createTemplate, getTemplate, listTemplates,
};
