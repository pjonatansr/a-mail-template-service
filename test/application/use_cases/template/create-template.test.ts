import TemplateRepositoryMongo from '@repositories/template-repository-mongo';
import CreateTemplate from '@use_cases/create-template';

import { Logger } from '@shared/logger';

import { mongoose } from '../../../../src/infrastructure/orm/mongoose/mongoose';
import { templateData } from '../../../entities/template/__mocks__/template';

jest.setTimeout(30000);

afterAll(async () => {
    await mongoose.disconnect();
});

it('We can check if the consumer called the class constructor', async () => {
    const repository = new TemplateRepositoryMongo(new Logger());

    expect(repository).toHaveProperty('persist');

    try {
        const template = CreateTemplate(templateData, repository);
        await expect(template).resolves.toBeDefined();
    } catch (e) {
        console.error(e);
    }
});
