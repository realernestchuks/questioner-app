import express from 'express';
import meetupdb from './v1/models/meetupdb';
import bodyParser from 'body-parser';
import router from './v1/routes/meetup';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

//App root
app.get('/', (req, res) => {
	res.status(200).send('App running successfully');
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});