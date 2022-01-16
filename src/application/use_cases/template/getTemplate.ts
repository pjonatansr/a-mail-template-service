import {
    ITemplate, IRepository, TemplateOrDatabaseError,
} from 'src/common/types/types';
import { Template } from 'src/entities/template/template';

const GetTemplate = async (
    { id }: ITemplate,
    repository: IRepository,
): Promise<Template | Error> => {
    const templateOrError: TemplateOrDatabaseError = await repository.get(id);

    return templateOrError.value;
};

export default GetTemplate;
