import { ITemplate, IRepository, Either } from 'src/common/types';
import { Template } from 'src/entities/template/template';
import { isLeft } from 'src/shared/either';

const CreateTemplate = async (
    templateData : ITemplate,
    { persist } : IRepository,
): Promise<Template> => {
    const templateOrError : Either<Error, Template> = Template.create(templateData);

    if (isLeft(templateOrError)) {
        throw templateOrError;
    }

    const template : Template = await persist(templateOrError.value);

    return template;
};

export default CreateTemplate;
