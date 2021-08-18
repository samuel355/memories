import express from 'express';

const router = express.Router();

//Home page route
router.get('/', (req, res) => {
    res.send('THIS WORKS');
});