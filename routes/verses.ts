import express from 'express'
import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
	res.send({ msg: 'Welcome to the Backend API' });
});

export default router