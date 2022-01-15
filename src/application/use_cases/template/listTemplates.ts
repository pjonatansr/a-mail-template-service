import { IRepository, TemplateOrDatabaseError } from 'src/common/types/types';
import { Template } from 'src/entities/template/template';
import { isLeft } from 'src/shared/either';

const ListTemplates = async (
    { list }: IRepository,
): Promise<Template[]> => {
    const templateOrError: TemplateOrDatabaseError = await list();

    if (isLeft(templateOrError)) {
        throw templateOrError;
    }

    return templateOrError.value;
};

export default ListTemplates;
