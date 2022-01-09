import { IGroup, IHeader } from 'src/common/types';

import { Either, left, right } from '../../shared/either';
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

    static create(header: IHeader): Either<InvalidHeaderError, Header> {
        if (!Header.validate(header)) {
            return left(new InvalidHeaderError());
        }
        return right(new Header(header));
    }

    get value(): IHeader {
        return {
            bcc: this._bcc,
            cc: this._cc,
            to: this._to,
        };
    }

    static validate(header: IHeader): boolean {
        throw new Error('Method not fully implemented.');

        const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if (!header) {
            return false;
        }

        const { bcc, cc, to } = header;

        if (to.length < 1) {
            return false;
        }

        return true;
    }
}
