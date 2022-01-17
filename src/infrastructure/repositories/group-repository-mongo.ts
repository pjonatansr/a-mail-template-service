import { Group } from '@entities/group';
import GroupRepository from '@entities/group-repository';
import MongooseGroup from '@schema/group';
import { IGroup, GroupOrError } from '@types';

import { Right } from '@shared/either';

export class GroupRepositoryMongo extends GroupRepository {
    async persist(group: Group): Promise<GroupOrError> {
        try {
            const mongooseGroup = new MongooseGroup({
                ...group,
            });

            const result = { group: null };
            await mongooseGroup
                .save()
                .then((groupData: unknown): void => {
                    result.group = groupData;
                });

            return Right<Group>(result.group);
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: group,
            });
        }
    }

    async get(_id: string): Promise<GroupOrError> {
        try {
            const mongooseGroup: IGroup = await MongooseGroup.findById(
                _id,
            );

            const groupOrError: GroupOrError = Group.create(mongooseGroup);

            return groupOrError;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: _id,
            });
        }
    }

    async list(): Promise<GroupOrError[]> {
        try {
            const groups = await MongooseGroup.find();
            const groupsOrErrors: GroupOrError[] = (
                groups
            ).map((group: IGroup) => Group.create(group));

            return groupsOrErrors;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
            });
        }
    }
}

export default GroupRepositoryMongo;
