export interface IGroup {
    contacts: string[],
    groupName: string,
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
