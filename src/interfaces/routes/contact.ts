import express from 'express';

const router = express.Router();

router.post('', async (req, res) => {
    res.json('Create Contact');
});

router.get('', async (_, res) => {
    res.json('List Contacts');
});

router.get('/:id', async (req, res) => {
    res.json('Get Contact');
});

export { router };
