import express from 'express';
import meetupdb from './v1/models/meetupdb';
import bodyParser from 'body-parser';
import meetupRouter from './v1/routes/meetup';
import questionRouter from './v1/routes/questions';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(meetupRouter);
app.use(questionRouter);

//App root
app.get('/', (req, res) => {
	res.status(200).send('App running successfully');
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});