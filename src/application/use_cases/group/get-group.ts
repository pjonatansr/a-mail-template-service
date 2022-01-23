import { Group } from '@entities/group';
import { IGroup, IRepository, GroupOrError } from '@types';

const GetGroup = async (
    { _id: id }: IGroup,
    repository: IRepository<Group>,
): Promise<Group | Error> => {
    const groupOrError: GroupOrError = await repository.get(id);

    return groupOrError.value;
};

export default GetGroup;
