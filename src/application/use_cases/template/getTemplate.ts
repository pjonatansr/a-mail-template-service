import { Template } from '@entities/template';
import {
    ITemplate, IRepository, TemplateOrError,
} from '@types';

const GetTemplate = async (
    { id }: ITemplate,
    repository: IRepository,
): Promise<Template | Error> => {
    const templateOrError: TemplateOrError = await repository.get(id);

    return templateOrError.value;
};

export default GetTemplate;
