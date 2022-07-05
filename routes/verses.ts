import { Router } from 'express';
import Verse from '../models/verse'
const verseRouter = Router();


verseRouter.get('/', (req, res) => {
	res.send("We see verse here");
});

export default verseRouter