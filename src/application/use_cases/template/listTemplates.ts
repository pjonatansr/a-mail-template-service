import { IRepository, TemplateOrDatabaseError } from 'src/common/types/types';
import { Template } from 'src/entities/template/template';

const ListTemplates = async (
    repository: IRepository,
): Promise<Template[] | Error> => {
    const templateOrError: TemplateOrDatabaseError = await repository.list();

    return templateOrError.value;
};

export default ListTemplates;
