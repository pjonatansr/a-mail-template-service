import { Template } from '@entities/template';
import CreateTemplate from 'src/application/use_cases/template/create-template';
import GetTemplate from 'src/application/use_cases/template/get-template';
import ListTemplates from 'src/application/use_cases/template/list-templates';
import TemplateRepository from 'src/infrastructure/repositories/template-repository-mongo';

export class TemplateController {
    private readonly templateRepository: TemplateRepository;

    constructor(templateRepository: TemplateRepository) {
        this.templateRepository = templateRepository;
    }

    async createTemplate({ body }): Promise<Template | Error> {
        const templateCreated = await CreateTemplate({ ...body }, this.templateRepository);

        return templateCreated;
    }

    async getTemplate({ query }): Promise<Template | Error> {
        const template = await GetTemplate({ ...query }, this.templateRepository);

        return template;
    }

    async listTemplates(): Promise<Template[] | Error> {
        const templates = await ListTemplates(this.templateRepository);

        return templates;
    }
}
