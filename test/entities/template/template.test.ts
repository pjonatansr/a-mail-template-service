import { Template } from '@entities/template';
import { ITemplate, TemplateOrError } from '@types';

describe('Template create', () => {
    it('should be ', () => {
        const templateData: ITemplate = {
            body: {
                content: "Dear developer,\n I'm a test-mail.",
                signature: 'Test-mail.',
            },
            title: 'Test-mail!',
            header: {
                to: [{
                    groupName: 'Test-mail Group',
                    contacts: [
                        {
                            address: 'this.pablo@gmail.com',
                        },
                    ],
                }],
            },
        };
        const template: TemplateOrError = Template.create(templateData);

        expect(template.tag).toBe('right');
    });
});
