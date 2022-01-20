import { Either, IGroup } from '@types';

import { firstLeft, isLeft, Right } from '@shared/either';

import { InvalidGroupError } from './errors/invalid-group';

export class Group implements IGroup {
    private readonly _contacts: string[];

    private readonly _groupName: string;

    private constructor({ contacts, groupName }: IGroup) {
        this._contacts = contacts;
        this._groupName = groupName;
        Object.freeze(this);
    }

    public get contacts(): string[] {
        return this._contacts;
    }

    public get groupName(): string {
        return this._groupName;
    }

    static create(g: IGroup): Either<InvalidGroupError, Group> {
        const result = Group.validate(g);

        if (isLeft(result)) {
            return result;
        }

        return Right(new Group(result.value));
    }

    get value(): IGroup {
        return {
            contacts: this.contacts,
            groupName: this.groupName,
        };
    }

    static validate(group: IGroup): Either<InvalidGroupError, IGroup> {
        const contactsLengthMustBePositive = ({ contacts }: IGroup) => contacts?.length > 0;

        const predicates = [contactsLengthMustBePositive];

        const messages = ['You must enter a contact.'].map(
            (message: string) => new InvalidGroupError(message),
        );

        return firstLeft<InvalidGroupError, IGroup>(
            group,
            predicates,
            messages,
        );
    }
}
