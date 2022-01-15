import { ITemplate, IRepository, TemplateOrDatabaseError } from 'src/common/types/types';
import { Template } from 'src/entities/template/template';
import { isLeft } from 'src/shared/either';

const GetTemplate = async (
    { id }: ITemplate,
    { get }: IRepository,
): Promise<Template> => {
    const templateOrError: TemplateOrDatabaseError = await get(id);

    if (isLeft(templateOrError)) {
        throw templateOrError;
    }

    return templateOrError.value;
};

export default GetTemplate;
