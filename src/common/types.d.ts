export interface IGroup {
    contacts: string[],
    groupName: string,
}
export interface IContact {
    address: string[],
    alias: string,
    personTitle: string,
}
export interface IHeader {
    bcc: IGroup[],
    cc: IGroup[],
    to: IGroup[],
}

export interface IBody {
    content: string,
    signature: string,
}

export interface ITemplate {
    id?: string,
    body: IBody,
    header: IHeader,
    title: string,
}
export interface IDomainError {
    message: string
}

interface ILeft<A> {
    value: A;
    tag: 'left'
}

interface IRight<B> {
    value: B;
    tag: 'right'
}

export type Either<A, B> = ILeft<A> | IRight<B>;

export type Predicate<N> = (val: N) => boolean
export interface IPersist {
    (template: Template): Promise<Template>;
}
export interface IGet {
    (id: string): Promise<Template>;
}
export interface IList {
    (): Promise<Template[]>;
}
export interface IRepository {
    persist: IPersist,
    get: IGet,
    list: IList,
}
