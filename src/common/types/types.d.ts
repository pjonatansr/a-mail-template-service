export interface IContact {
    _id?: string;
    address: string;
    alias?: string;
    personTitle?: string;
}

export interface IGroup {
    _id?: string;
    contacts: IContact[];
    groupName?: string;
}

export interface IHeader {
    _id?: string;
    bcc?: IGroup[];
    cc?: IGroup[];
    to: IGroup[];
}

export interface IBody {
    _id?: string;
    content: string;
    signature?: string;
}

export interface ITemplate {
    id?: string;
    body: IBody;
    header: IHeader;
    title: string;
}
export interface IDomainError {
    message: string;
}

export interface IDatabaseError {
    message: string;
    instance?: Template | string;
}

export interface ILeft<A> {
    value: A;
    tag: 'left';
}

export interface IRight<B> {
    value: B;
    tag: 'right';
}

export type Either<A, B> = ILeft<A> | IRight<B>;

export type Predicate<N> = (val: N) => boolean;

export interface IRepository<T> {
    persist(template: Template): Promise<Either<T | IDatabaseError>>;
    get(_id: string): Promise<Either<T | IDatabaseError>>;
    list(): Promise<Either<T[] | IDatabaseError>>;
}

export interface ILogger {
    logError: (error: Error) => void
}
export interface IEnviroment {
    database: {
        dialect: string;
        url: string;
    };
}

export type DatabaseErrorType =
    | Either<DatabaseError | Template>
    | Either<DatabaseError | Template>[];

export type TemplateOrError = Either<Error, Template>;

export type GroupOrError = Either<Error, Group>;

export type ContactOrError = Either<Error, Contact>;

export interface IErrorMessage {
    error: Error;
}
