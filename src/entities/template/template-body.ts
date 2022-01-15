import { Either, IBody } from 'src/common/types/types';
import {
    firstLeft, isLeft, Right,
} from 'src/shared/either';

import { InvalidBodyError } from './errors/invalid-body';

export class Body implements IBody {
    private _content: string;

    private _signature: string;

    private constructor({ content, signature }: IBody) {
        this._content = content;
        this._signature = signature;
        Object.freeze(this);
    }

    public get content(): string {
        return this._content;
    }

    public get signature(): string {
        return this._signature;
    }

    static create(body: IBody): Either<InvalidBodyError, Body> {
        const result = Body.validate(body);
        if (isLeft(result)) {
            return result;
        }

        return Right(new Body(body));
    }

    get value(): IBody {
        return {
            content: this._content,
            signature: this._signature,
        };
    }

    static validate(body: IBody): Either<InvalidBodyError, IBody> {
        const contentLengthMustBePositive = ({ content }: IBody) => content?.length > 0;

        const predicates = [
            contentLengthMustBePositive,
        ];

        const messages = [
            'You must enter the content.',
        ].map((message: string) => new InvalidBodyError(message));

        return firstLeft<InvalidBodyError, IBody>(body, predicates, messages);
    }
}
