import { IRepository } from 'src/common/types';
import { Template } from 'src/entities/template/template';

const TemplateRepository = (): IRepository => ({
    async persist(template: Template) {
        return new Promise<Template | Error>((resolve) => {
            resolve(template);
        });
    },
    get: undefined,
    list: undefined,
});

export default TemplateRepository;
