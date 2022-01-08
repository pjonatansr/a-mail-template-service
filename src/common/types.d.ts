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

export type TemplateType = {
    id: string,
    body: IBody,
    header: IHeader,
    title: string,
};

export type Template = {
    getId: () => string,
    getBody: () => IBody,
    getHeader: () => IHeader,
    getTitle: () => string
}
