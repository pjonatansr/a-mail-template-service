import { Template } from '@entities/template';
import {
    DatabaseErrorType,
    Either,
    ILogger, IRepository,
} from '@types';
import { DatabaseError } from 'src/common/errors/databaseError';
import { Left } from 'src/shared/either';

export class TemplateRepository implements IRepository {
    protected readonly logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    protected getErrorData = ({ method, target }: {
        method: string, target?: Template | string
    }): {
        method: string,
        target: Template | string | never,
        logger: ILogger
    } => ({
        method,
        target,
        logger: this.logger,
    });

    protected getError = ({ method, target }: {
        method: string, target?: Template | string
    }): DatabaseErrorType => Left(new DatabaseError(
        'Method not implemented',
        this.getErrorData({
            method,
            target,
        }),
    ));

    async persist(template: Template): Promise<Either<Error, Template>> {
        return this.getError({ method: 'persist', target: template });
    }

    async get(_id: string): Promise<Either<Error, Template>> {
        return this.getError({ method: 'get', target: _id });
    }

    async list(): Promise<Either<Error, Template>[]> {
        return this.getError({ method: 'list' });
    }
}

export default TemplateRepository;
