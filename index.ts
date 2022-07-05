import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import 'dotenv/config'
import verseRouter from './routes/verses'
import { connect } from 'mongoose';


const port = process.env.PORT || 5000;
const app = express();

// Database Config 
const connectDb = async () => {
	try{
		await connect(process.env.MONGO_URI)
		console.log('Database is now connected')
	}catch(err){console.error(err)}

}
connectDb();


app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router Middleware
app.use('/verses', verseRouter);


app.get('/', (req, res) => {
	res.send("<h1 style='text-align:center; margin-top:50px'>Welcome To Proverbs Daily Backend</h1>");
});

app.listen(port, function () {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);;
});