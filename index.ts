import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import router from './routes/verses'

const port = process.env.PORT || 5000;
const app = express();
dotenv.config()

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/verses', router);

app.get('/*', (req, res) => {
	res.send({ info: 'Backend is Live' });
});

app.listen(port, function () {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);;
});