import { Group } from '@entities/group';
import { IGroup, IRepository, GroupOrError } from '@types';

import { isLeft } from '@shared/either';

const CreateGroup = async (
    groupData: IGroup,
    repository: IRepository,
): Promise<Group | Error> => {
    const groupOrError: GroupOrError = Group.create(groupData);

    if (isLeft(groupOrError)) {
        return groupOrError.value;
    }

    const group: Group | Error = await repository.persist(
        groupOrError.value,
    );

    return group;
};

export default CreateGroup;
