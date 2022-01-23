import { Contact } from '@entities/contact';
import { DatabaseError } from '@errors/database-error';
import {
    DatabaseErrorType, Either, ILogger, IRepository,
} from '@types';

import { Left } from '@shared/either';

export class ContactRepository implements IRepository<Contact> {
    protected readonly logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    protected getErrorData = ({
        method,
        target,
    }: {
        method: string;
        target?: Contact | string;
    }): {
        method: string;
        target: Contact | string | never;
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
        target?: Contact | string;
    }): DatabaseErrorType => Left(
        new DatabaseError(
            'Method not implemented',
            this.getErrorData({
                method,
                target,
            }),
        ),
    );

    async persist(contact: Contact): Promise<Either<Error, Contact>> {
        return this.getError({ method: 'persist', target: contact });
    }

    async get(_id: string): Promise<Either<Error, Contact>> {
        return this.getError({ method: 'get', target: _id });
    }

    async list(): Promise<Either<Error, Contact>[]> {
        return this.getError({ method: 'list' });
    }

    public static makeRepository = (logger: ILogger) => new ContactRepository(logger);
}

export default ContactRepository;
