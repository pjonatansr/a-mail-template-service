import { Template } from '@entities/template';
import TemplateRepository from '@repositories/template-repository-mongo';
import CreateTemplate from '@use_cases/create-template';
import GetTemplate from '@use_cases/get-template';
import ListTemplates from '@use_cases/list-templates';

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
