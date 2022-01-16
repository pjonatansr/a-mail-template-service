import { Either, IContact } from '@types';
import { firstLeft, isLeft, Right } from 'src/shared/either';

import { InvalidContactError } from './errors/invalid-contact';

export class Contact implements IContact {
    private readonly _address: string;

    private readonly _alias: string;

    private readonly _personTitle: string;

    private constructor({ address, alias, personTitle }: IContact) {
        this._address = address;
        this._alias = alias;
        this._personTitle = personTitle;
        Object.freeze(this);
    }

    public get address(): string {
        return this._address;
    }

    public get alias(): string {
        return this._alias;
    }

    public get personTitle(): string {
        return this._personTitle;
    }

    static create(g: IContact): Either<InvalidContactError, Contact> {
        const result = Contact.validate(g);

        if (isLeft(result)) {
            return result;
        }

        return Right(new Contact(result.value));
    }

    get value(): IContact {
        return {
            address: this.address,
            alias: this.alias,
            personTitle: this.personTitle,
        };
    }

    static validate(contact: IContact): Either<InvalidContactError, IContact> {
        const addressLengthMustBePositive = (
            { address }: IContact,
        ) => address?.length > 0;

        const personTitleLengthMustBePositive = (
            { personTitle }: IContact,
        ) => personTitle?.length > 0;

        const predicates = [
            addressLengthMustBePositive,
            personTitleLengthMustBePositive,
        ];

        const messages = [
            'You must enter a contact.',
            'You must enter a person title.',
        ].map((message: string) => new InvalidContactError(message));

        return firstLeft<InvalidContactError, IContact>(contact, predicates, messages);
    }
}
