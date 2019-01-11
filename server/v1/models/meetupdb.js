 
const meetups = [
	{ 
		id: 1, 
		createdOn: '1/3/2019', 
		title: 'Node.js developer meetup',
		location: 'Abuja', 
		images: 'meetup image here',
		description: 'Lets build up programming in Africa. that is the essence of this meetup, to teacher newbies what they have to know about programming and guidlines on how to make the best out of it', 
		happeningOn: '12/3/2019',
		tag: 'technology'
	},
	{ 
		id: 2, 
		createdOn: '1/01/2019', 
		title: 'Meetup on health issues',
		location: 'Worri', 
		images: 'meetup image here',
		description: 'A whole day on health related issues, guidlines about what to do in any health situations.', 
		happeningOn: '4/01/2019', 
		tag: 'health living'
	},
	{ 
		id: 3, 
		createdOn: '25/10/2019',
		title: 'Career oprtunities for younger ones',                                        
		location: 'Portharcourt', 
		images: 'meetup image here',
		description: 'It will be a mind blowing day as there will be popular speakers on career opportunities one can decide to take and how to go about each of the ideas, If you as confused or you don\'t know how to go about it then this meetup is for you. be there.', 
		happeningOn: '3/11/2018',
		tag: 'career' 
	}
];

const upcoming = [
	{ 
		id: 4, 
		createdOn: '1/3/2019', 
		title: 'meetup for designers',
		location: 'Abuja',
		images: 'meetup image here', 
		description: 'If you are a designer and you care to showcase your talent then this meetup is for you and also if you are a newbie and wants to learn, then this meetup is alsp for you as you will get to meet people with great experience in what you aspire to know and that could help you out.', 
		happeningOn: '12/3/2019',
		tag: 'fashion, clothes' 
	},
	{ 
		id: 5, 
		createdOn: '1/01/2019', 
		title: 'Sportsmanship buiding meetup',
		location: 'Worri', 
		images: 'meetup image here', 
		description: 'All sports allied activities will happen on the event. We will like to explore and young talents in sports and move them higher', 
		happeningOn: '4/01/2019', 
		tag: 'sports' 
	},
	{ 
		id: 6, 
		createdOn: '25/10/2019', 
		title: 'pop stars meetup',
		location: 'Portharcourt', 
		images: 'meetup image here', 
		description: 'All music entertainment night, It promises to be a hot rock in city of Lagos as so many popular Nigerian and foreign pop stars will be performing just in one night.', 
		happeningOn: '3/11/2018', 
		tag: 'entertainment' 
	}
];

meetups.push(upcoming);

export default meetups;