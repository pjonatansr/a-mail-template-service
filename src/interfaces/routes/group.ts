import express from 'express';

const router = express.Router();

router.post('/group', async (req, res) => {
    res.json('Create Group');
});

router.get('/group/:id?', async (_, res) => {
    res.json('Get Group');
});

export { router };
