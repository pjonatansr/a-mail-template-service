import { Group } from '@entities/group';
import { IGroup, IRepository, GroupOrError } from '@types';

const GetGroup = async (
    { id }: IGroup,
    repository: IRepository,
): Promise<Group | Error> => {
    const groupOrError: GroupOrError = await repository.get(id);

    return groupOrError.value;
};

export default GetGroup;
