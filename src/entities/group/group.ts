import { IGroup } from 'src/common/types';
import { Either, left, right } from 'src/shared/either';

import { InvalidGroupError } from './invalid-group';

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

    static create(group: IGroup): Either<InvalidGroupError, Group> {
        if (!Group.validate(group)) {
            return left(new InvalidGroupError());
        }
        return right(new Group(group));
    }

    get value(): IGroup {
        return {
            contacts: this.contacts,
            groupName: this.groupName,
        };
    }

    static validate(group: IGroup): boolean {
        throw new Error('Method not implemented.');
    }
}
