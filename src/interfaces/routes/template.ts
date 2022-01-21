import express from 'express';
import TemplateRepositoryMongo from 'src/infrastructure/repositories/template-repository-mongo';

import { Logger } from '@shared/logger';

import { TemplateController } from '../controllers/template-controller';

const router = express.Router();
const repository = new TemplateRepositoryMongo(new Logger());
const templateController = new TemplateController(repository);

router.post('', async (req, res) => {
    const template = await templateController.createTemplate(req);
    // TO-DO error treatment
    res.json(template);
});

router.get('', async (_, res) => {
    const templates = await templateController.listTemplates();
    // TO-DO error treatment
    res.send(templates);
});

router.get('/:id', async (req, res) => {
    const template = await templateController.getTemplate(req);
    // TO-DO error treatment
    res.send(template);
});

export { router };
