import {
    IBody, IGroup, IHeader, ITemplate,
} from 'src/common/types';
import { Either, left, right } from 'src/shared/either';

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

    static create({ body, header, title }: ITemplate):
    Either<InvalidBodyError | InvalidHeaderError | InvalidTitleError, Template> {
        throw new Error('Method not fully implemented.');

        const bodyOrError: Either<InvalidBodyError, Body> = Body.create(body);

        const headerOrError: Either<InvalidHeaderError, Header> = Header.create(header);

        // TO-DO:
        if (bodyOrError.isLeft()) {
            // return left(bodyOrError.value);
        }
        if (headerOrError.isLeft()) {
            // return left(headerOrError.value);
        }

        // const newBody: IBody = bodyOrError.value;
        // const newHeader: IHeader = headerOrError.value;
        // return right(new Template({ body: newBody, header: newHeader, title }));
        return null;
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
    throw new Error('Method not fully implemented.');
    validateBody(template);
    validateHeader(template);
};
