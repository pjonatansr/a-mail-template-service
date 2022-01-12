import { Either, IGroup } from 'src/common/types';
import { isLeft, Left, Right } from 'src/shared/either';

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

    static create(g: IGroup): Either<InvalidGroupError, Group> {
        const result = Group.validate(g);

        if (isLeft(result)) {
            return result;
        }

        return Right(new Group(result.value));

        if (!Group.validate(g)) {
            return Left(new InvalidGroupError());
        }
        return Right(new Group(g));
    }

    get value(): IGroup {
        return {
            contacts: this.contacts,
            groupName: this.groupName,
        };
    }

    static validate(group: IGroup): Either<InvalidGroupError, IGroup> {
        throw new Error('Method not implemented.');
    }
}
