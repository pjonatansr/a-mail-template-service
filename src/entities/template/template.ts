import {
    ITemplate,
} from 'src/common/types';
import { Either, left, right } from 'src/shared/either';

import { InvalidBodyError } from './errors/invalid-body';
import { InvalidHeaderError } from './errors/invalid-header';
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

    static create(templateData: ITemplate):
    Either<InvalidBodyError | InvalidHeaderError, Template> {
        const bodyOrError: Either<InvalidBodyError, Body> = Body.create(templateData.body);
        const headerOrError:
        Either<InvalidHeaderError, Header> = Header.create(templateData.header);

        if (bodyOrError instanceof InvalidBodyError) {
            return left(bodyOrError);
        }

        if (headerOrError instanceof InvalidHeaderError) {
            return left(headerOrError);
        }

        const newTemplate: {
            title: string,
            body: Body,
            header: Header,
        } = {
            title: templateData.title,
            body: undefined,
            header: undefined,
        };

        const getFunctionByType = {
            Body: (body: Body) => { newTemplate.body = body; },
            Header: (header: Header) => { newTemplate.header = header; },
        };

        const setBody = getFunctionByType[typeof bodyOrError];
        setBody(bodyOrError);

        const setHeader = getFunctionByType[typeof headerOrError];
        setHeader(bodyOrError);

        return right(new Template(
            newTemplate.body,
            newTemplate.header,
            newTemplate.title,
        ));
    }
}
