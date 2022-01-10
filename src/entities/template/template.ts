import {
    Either,
    ITemplate,
} from 'src/common/types';
import { firstLeft, isLeft, Right } from 'src/shared/either';

import { InvalidBodyError } from './errors/invalid-body';
import { InvalidHeaderError } from './errors/invalid-header';
import { InvalidTitleError } from './errors/invalid-title';
import { Body } from './template-body';
import { Header } from './template-header';

export class Template {
    public readonly body: Body;

    public readonly header: Header;

    public readonly title: string;

    private constructor(
        body: Body,
        header: Header,
        title: string,
    ) {
        this.body = body;
        this.header = header;
        this.title = title;
        Object.freeze(this);
    }

    static create(template: ITemplate):
    Either<InvalidBodyError | InvalidHeaderError | InvalidTitleError, Template> {
        const result = Template.validate(template);

        if (isLeft(result)) {
            return result;
        }

        const bodyOrError:
        Either<InvalidBodyError, Body> = Body.create(template.body);

        if (isLeft(bodyOrError)) {
            return bodyOrError;
        }

        const headerOrError:
        Either<InvalidHeaderError, Header> = Header.create(template.header);

        if (isLeft(headerOrError)) {
            return headerOrError;
        }

        return Right<Template>(new Template(
            bodyOrError.value,
            headerOrError.value,
            template.title,
        ));
    }

    static validate(template: ITemplate):
    Either<InvalidTitleError, ITemplate> {
        const titleLengthMustBePositive = ({ title }: ITemplate) => title?.length > 0;

        const predicates = [
            titleLengthMustBePositive,
        ];

        const messages = [
            'You must enter a title.',
        ].map((message: string) => new InvalidTitleError(message));

        return firstLeft<InvalidTitleError, ITemplate>(template, predicates, messages);
    }
}
