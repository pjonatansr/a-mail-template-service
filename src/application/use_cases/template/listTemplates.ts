import { ITemplate, IRepository } from 'src/common/types';
import { Template } from 'src/entities/template/template';

const ListTemplates = async (
    { id }: ITemplate,
    { get }: IRepository,
): Promise<Template> => {
    const template: Template = await get(id);

    return template;
};

export {
    ListTemplates,
};
