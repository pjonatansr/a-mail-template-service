import {
    IBody, IGroup, IHeader, ITemplate,
} from 'src/common/types';
import { Either, left, right } from 'src/shared/either';

import { InvalidBodyError } from './errors/invalid-body';
import { InvalidHeaderError } from './errors/invalid-header';
import { InvalidTitleError } from './errors/invalid-title';

type ErrorClasses = InvalidBodyError | InvalidHeaderError | InvalidTitleError;

export class Template {
    public readonly body: IBody;

    public readonly header: IHeader;

    public readonly title: string;

    private constructor({
        body, header, title,
    }: ITemplate) {
        this.body = body;
        this.header = header;
        this.title = title;
        Object.freeze(this);
    }

    static create(templateData: ITemplate):
    Either<InvalidBodyError | InvalidHeaderError | InvalidTitleError, Template> {
        const bodyOrError:
        Either<InvalidBodyError, IBody> = Body.create(templateData.body);

        const headerOrError:
        Either<InvalidHeaderError, IHeader> = Header.create(templateData.header);

        if (bodyOrError.isLeft()) {
            return left(bodyOrError.value);
        }
        if (headerOrError.isLeft()) {
            return left(headerOrError.value);
        }
        const name: Name = bodyOrError.value;
        const email: Email = headerOrError.value;
        return right(new User(name, email));
    }
}

function validateBody(template: ITemplate) {
    if (template.body.content.length === 0) {
        throw new Error("Body content can't be empty.");
    }
}

function validateHeader(template: ITemplate) {
    const contacts = template.header.to
        .map((group: IGroup) => group.contacts);

    const distinctContacts = []
        .concat.apply(
            [],
            ...contacts,
        );

    if (distinctContacts.length === 0) {
        throw new Error("Header \"To\" can't be empty.");
    }
}

const validateTemplate = (template: ITemplate): void => {
    validateBody(template);
    validateHeader(template);
};

export default function buildMakeTemplate() {
    return ({
        id,
        body,
        header,
        title,
    }: ITemplate): Template => {
        validateTemplate({
            id,
            body,
            header,
            title,
        });

        return Object.freeze({
            getId: (): string => id,
            getBody: (): IBody => body,
            getHeader: (): IHeader => header,
            getTitle: (): string => title,
        });
    };
}
