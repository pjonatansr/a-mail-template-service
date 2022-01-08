import { IBody } from 'src/common/types';

import { Either, left, right } from '../../shared/either';
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
        if (!Body.validate(body)) {
            return left(new InvalidBodyError());
        }
        return right(new Body(body));
    }

    get value(): IBody {
        return {
            content: this._content,
            signature: this._signature,
        };
    }

    static validate(body: IBody): boolean {
        throw new Error('Method not fully implemented.');
    }
}
