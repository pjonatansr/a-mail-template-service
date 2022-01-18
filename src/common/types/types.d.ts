export interface IGroup {
    id?: string;
    contacts: string[];
    groupName: string;
}
export interface IContact {
    id?: string;
    address: string;
    alias: string;
    personTitle: string;
}
export interface IHeader {
    bcc: IGroup[];
    cc: IGroup[];
    to: IGroup[];
}

export interface IBody {
    content: string;
    signature: string;
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

export interface IRepository {
    persist(template: Template): Promise<Either<Template | IDatabaseError>>;
    get(_id: string): Promise<Either<Template | IDatabaseError>>;
    list(): Promise<Either<Template[] | IDatabaseError>>;
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
