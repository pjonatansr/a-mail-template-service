import { Template } from '@entities/template';
import {
    ITemplate, IRepository, Either,
} from '@types';
import { isLeft } from 'src/shared/either';

const CreateTemplate = async (
    templateData: ITemplate,
    repository: IRepository,
): Promise<Template | Error> => {
    const templateOrError: Either<Error, Template> = Template.create(templateData);

    if (isLeft(templateOrError)) {
        return templateOrError.value;
    }

    const template: Template | Error = await repository.persist(templateOrError.value);

    return template;
};

export default CreateTemplate;
