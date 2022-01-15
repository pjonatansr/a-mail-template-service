import express from 'express';
import { Template } from 'src/entities/template/template';

import * as TemplateController from '../controllers/templateController';

const router = express.Router();

router.post('', async (req, res) => {
    const template: Template = await TemplateController.createTemplate(req);

    res.json(template);
});

router.get('', async (_, res) => {
    const templates = await TemplateController.listTemplates();

    res.json(templates);
});

router.get('/:id', async (req, res) => {
    const template: Template = await TemplateController.getTemplate(req);

    res.json(template);
});

export { router };
