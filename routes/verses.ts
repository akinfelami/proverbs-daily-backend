import { Router } from 'express';
import Verse from '../models/verse'
import axios from 'axios'
import chaptersAndVerses from '../chaptersandverses'


const verseRouter = Router();

interface verse {
	content: string
    reference: string
	translation: string
}


verseRouter.get('/', async(req, res) => {

	let result : verse;

	const chapter = Math.floor(Math.random() * (Math.floor(31) - Math.ceil(1)) + 1);
	const verse = Math.floor(Math.random() * (Math.floor(chaptersAndVerses[chapter]) - Math.ceil(1)) + 1);
	
	await axios.get(`https://bible-api.com/proverbs ${chapter}:${verse}`)
	.then((res) => {
		const reference: string =  res.data.reference
		const text: string = res.data.text
		const translationName : string = res.data.translation_name

		result = {
			content: text.replace(/(\r\n|\n|\r)/gm, " "),
			reference: reference,
			translation: translationName
		}
		
	})
	.catch(err=>console.error(err)) 



	const newVerse = new Verse({
		content: result.content,
		reference: result.reference,
		translation: result.translation
	})
	
	await newVerse.save();
	res.send(JSON.stringify(newVerse))	

});

verseRouter.get('/feed', async (req, res) => {
	const verses = await Verse.find({}).sort({createdAt:-1})
	res.send(JSON.stringify(verses));
});

verseRouter.get('/verse-of-the-day', async (req, res) => {
	const verseoftheday = await Verse.findOne().sort({createdAt:-1})
	res.send(JSON.stringify(verseoftheday))

}

)

export default verseRouter