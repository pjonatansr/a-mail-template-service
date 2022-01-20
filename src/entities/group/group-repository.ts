import { Group } from '@entities/group';
import { DatabaseError } from '@errors/database-error';
import {
    DatabaseErrorType, Either, ILogger, IRepository,
} from '@types';

import { Left } from '@shared/either';

export class GroupRepository implements IRepository {
    protected readonly logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    protected getErrorData = ({
        method,
        target,
    }: {
        method: string;
        target?: Group | string;
    }): {
        method: string;
        target: Group | string | never;
        logger: ILogger;
    } => ({
        method,
        target,
        logger: this.logger,
    });

    protected getError = ({
        method,
        target,
    }: {
        method: string;
        target?: Group | string;
    }): DatabaseErrorType => Left(
        new DatabaseError(
            'Method not implemented',
            this.getErrorData({
                method,
                target,
            }),
        ),
    );

    async persist(group: Group): Promise<Either<Error, Group>> {
        return this.getError({ method: 'persist', target: group });
    }

    async get(_id: string): Promise<Either<Error, Group>> {
        return this.getError({ method: 'get', target: _id });
    }

    async list(): Promise<Either<Error, Group>[]> {
        return this.getError({ method: 'list' });
    }

    public static makeRepository = (logger: ILogger) => new GroupRepository(logger);
}

export default GroupRepository;
