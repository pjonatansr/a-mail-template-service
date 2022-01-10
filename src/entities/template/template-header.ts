import { Either, IGroup, IHeader } from 'src/common/types';
import {
    firstLeft, isLeft, Right,
} from 'src/shared/either';

import { InvalidHeaderError } from './errors/invalid-header';

export class Header implements IHeader {
    private readonly _bcc: IGroup[];

    private readonly _cc: IGroup[];

    private readonly _to: IGroup[];

    private constructor({ bcc, cc, to }: IHeader) {
        this._bcc = bcc;
        this._cc = cc;
        this._to = to;
        Object.freeze(this);
    }

    public get bcc(): IGroup[] { return this._bcc; }

    public get cc(): IGroup[] { return this._cc; }

    public get to(): IGroup[] { return this._to; }

    static create(h: IHeader): Either<InvalidHeaderError, Header> {
        const result = Header.validate(h);

        if (isLeft(result)) {
            return result;
        }

        return Right(new Header(result.value));
    }

    get value(): IHeader {
        return {
            bcc: this._bcc,
            cc: this._cc,
            to: this._to,
        };
    }

    static validate(h: IHeader): Either<InvalidHeaderError, IHeader> {
        const toLengthMustBePositive = ({ to }: IHeader) => to?.length > 0;

        const predicates = [
            toLengthMustBePositive,
        ];

        const messages = [
            'You must enter at least one destination address.',
        ].map((message: string) => new InvalidHeaderError(message));

        return firstLeft<InvalidHeaderError, IHeader>(h, predicates, messages);
    }
}
