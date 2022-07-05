import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import 'dotenv/config'
import verseRouter from './routes/verses'
import { Schema, model, connect } from 'mongoose';


const port = process.env.PORT || 5000;
const app = express();

// Database Config 
const connectDb = async () => {
	try{
		await connect(process.env.MONGO_URI)
		console.log('DB is now connected')
	}catch(err){console.error(err)}

}
connectDb()




app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/verses', verseRouter);

app.get('/', (req, res) => {
	res.send("<h1>Welcome To Proverbs Daily Backend</h1>");
});

app.listen(port, function () {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);;
});