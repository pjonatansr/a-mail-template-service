import { Template } from '@entities/template';
import {
    ITemplate, IRepository, TemplateOrError, Either,
} from '@types';

import { isLeft } from '@shared/either';

const CreateTemplate = async (
    templateData: ITemplate,
    repository: IRepository<Template>,
): Promise<Template | Error> => {
    const templateOrError: TemplateOrError = Template.create(templateData);

    if (isLeft(templateOrError)) {
        return templateOrError.value;
    }

    const template: Either<Template, Error> = await repository.persist(
        templateOrError.value,
    );

    return template.value;
};

export default CreateTemplate;
