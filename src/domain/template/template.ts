import {
    IBody, IGroup, IHeader, Template, TemplateType,
} from 'src/common/types';

function validateBody(template: TemplateType) {
    if (template.body.content.length === 0) {
        throw new Error("Body content can't be empty.");
    }
}

function validateHeader(template: TemplateType) {
    const contacts = template.header.to
        .map((group: IGroup) => group.contacts);

    const distinctContacts = []
        .concat.apply(
            [],
            ...contacts,
        );

    if (distinctContacts.length === 0) {
        throw new Error("Header \"To\" can't be empty.");
    }
}

const validateTemplate = (template: TemplateType): void => {
    validateBody(template);
    validateHeader(template);
};

export default function buildMakeTemplate() {
    return ({
        id,
        body,
        header,
        title,
    }: TemplateType): Template => {
        validateTemplate({
            id,
            body,
            header,
            title,
        });

        return Object.freeze({
            getId: (): string => id,
            getBody: (): IBody => body,
            getHeader: (): IHeader => header,
            getTitle: (): string => title,
        });
    };
}
