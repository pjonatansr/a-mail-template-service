import express from 'express';

const router = express.Router();

router.post('', async (req, res) => {
    res.json('Create Group');
});

router.get('', async (_, res) => {
    res.json('List Groups');
});

router.get('/:id', async (req, res) => {
    res.json('Get Group');
});

export { router };
