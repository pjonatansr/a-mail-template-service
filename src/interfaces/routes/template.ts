import express from 'express';

import * as TemplateController from '../controllers/templateController';

const router = express.Router();

router.post('', async (req, res) => {
    const template = await TemplateController.createTemplate(req);
    // TO-DO error treatment
    res.json(template);
});

router.get('', async (_, res) => {
    const templates = await TemplateController.listTemplates();
    // TO-DO error treatment
    res.send(templates);
});

router.get('/:id', async (req, res) => {
    const template = await TemplateController.getTemplate(req);
    // TO-DO error treatment
    res.send(template);
});

export { router };
