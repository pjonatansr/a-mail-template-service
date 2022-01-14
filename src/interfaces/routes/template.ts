import express from 'express';

const router = express.Router();

router.post('/template', async (req, res) => {
    res.json('Create Template');
});

router.get('/template/:id?', async (_, res) => {
    res.json('Get Template');
});

export { router };
