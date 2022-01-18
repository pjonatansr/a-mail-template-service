import { Group } from '@entities/group';
import { IRepository, GroupOrError } from '@types';

const ListGroups = async (
    repository: IRepository,
): Promise<Group[] | Error> => {
    const groupOrError: GroupOrError = await repository.list();

    return groupOrError.value;
};

export default ListGroups;
