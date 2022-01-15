import express from 'express';

const router = express.Router();

router.post('/contact', async (req, res) => {
    res.json('Create Contact');
});

router.get('/contact/:id?', async (_, res) => {
    res.json('Get Contact');
});

export { router };
