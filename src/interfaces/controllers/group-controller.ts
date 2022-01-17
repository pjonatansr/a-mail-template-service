import { Group } from '@entities/group';
import CreateGroup from '@use_cases/create-group';
import ListGroups from '@use_cases/list-groups';
import GetGroup from 'src/application/use_cases/group/get-group';
import GroupRepository from 'src/infrastructure/repositories/group-repository-mongo';

export class GroupController {
    private readonly groupRepository: GroupRepository;

    constructor(groupRepository: GroupRepository) {
        this.groupRepository = groupRepository;
    }

    async createGroup({ body }): Promise<Group | Error> {
        const groupCreated = await CreateGroup({ ...body }, this.groupRepository);

        return groupCreated;
    }

    async getGroup({ query }): Promise<Group | Error> {
        const group = await GetGroup({ ...query }, this.groupRepository);

        return group;
    }

    async listGroups(): Promise<Group[] | Error> {
        const groups = await ListGroups(this.groupRepository);

        return groups;
    }
}
