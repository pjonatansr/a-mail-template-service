import { ITemplate } from '@types';

export const templateData: ITemplate = {
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
