import { DatabaseError } from 'src/common/errors/databaseError';
import {
    DatabaseErrorType,
    Either,
    ILogger, IRepository,
} from 'src/common/types/types';
import { Template } from 'src/entities/template/template';
import { Left } from 'src/shared/either';

export class TemplateRepository implements IRepository {
    protected readonly logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    private getErrorData = ({ method, target }: {
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

    private getError = ({ method, target }: {
        method: string, target?: Template | string
    }): DatabaseErrorType => Left(new DatabaseError(
        'Method not implemented',
        this.getErrorData({
            method,
            target,
        }),
    ));

    async persist(template: Template): Promise<Either<DatabaseError, Template>> {
        return this.getError({ method: 'persist', target: template });
    }

    async get(_id: string): Promise<Either<DatabaseError, Template>> {
        return this.getError({ method: 'get', target: _id });
    }

    async list(): Promise<Either<DatabaseError, Template[]>> {
        return this.getError({ method: 'list' });
    }
}

export default TemplateRepository;
