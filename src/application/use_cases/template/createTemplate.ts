import {
    ITemplate, IRepository, Either, TemplateOrDatabaseError,
} from 'src/common/types';
import { Template } from 'src/entities/template/template';
import { isLeft } from 'src/shared/either';

const CreateTemplate = async (
    templateData: ITemplate,
    { persist }: IRepository,
): Promise<Template> => {
    const templateOrError: Either<Error, Template> = Template.create(templateData);

    if (isLeft(templateOrError)) {
        throw templateOrError;
    }

    const persistedTemplateOrError: TemplateOrDatabaseError = await persist(templateOrError.value);

    if (isLeft(persistedTemplateOrError)) {
        throw persistedTemplateOrError;
    }

    return persistedTemplateOrError.value;
};

export default CreateTemplate;
