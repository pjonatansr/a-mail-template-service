import { Template } from '@entities/template';
import { IRepository, TemplateOrError } from '@types';

const ListTemplates = async (
    repository: IRepository<Template>,
): Promise<Template[] | Error> => {
    const templateOrError: TemplateOrError = await repository.list();

    return templateOrError.value;
};

export default ListTemplates;
