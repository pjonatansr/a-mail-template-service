import { Template } from '@entities/template';
import { ITemplate, TemplateOrError } from '@types';

import { templateData } from './__mocks__/template';

describe('Template create', () => {
    it('tag should be right', () => {
        const template: TemplateOrError = Template.create(templateData);

        expect(template.tag).toBe('right');
    });

    it('content should be defined', () => {
        const templateModified: ITemplate = {
            ...templateData,
            body: {
                content: undefined,
                signature: 'Test-mail.',
            },
        };

        const template: TemplateOrError = Template.create(templateModified);

        expect(template.tag).toBe('left');
    });

    it('header "to" should contains at least one group with one contact', () => {
        const templateModified: ITemplate = {
            ...templateData,
            header: {
                to: [],
            },
        };

        const template: TemplateOrError = Template.create(templateModified);

        expect(template.tag).toBe('left');
    });

    it('title should not be undefined', () => {
        const templateModified: ITemplate = {
            ...templateData,
            title: undefined,
        };

        const template: TemplateOrError = Template.create(templateModified);

        expect(template.tag).toBe('left');
    });

    it('title should not be empty', () => {
        const templateModified: ITemplate = {
            ...templateData,
            title: '',
        };

        const template: TemplateOrError = Template.create(templateModified);

        expect(template.tag).toBe('left');
    });
});
