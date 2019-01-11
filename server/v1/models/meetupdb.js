
const meetups = [
	{ 
		id: 1, 
		createdOn: '1/3/2019', 
		title: 'meetup for Doctors',
		location: 'Abuja', 
		description: 'making difference', 
		happeningOn: '12/3/2019', 
	},
	{ 
		id: 2, 
		createdOn: '1/01/2019', 
		title: 'meetup for Doctors',
		location: 'Worri', 
		description: 'health sound', 
		happeningOn: '4/01/2019', 
	},
	{ 
		id: 3, 
		createdOn: '25/10/2019',
		title: 'meetups on health issues',                                        
		location: 'Portharcourt', 
		description: 'wild poultry', 
		happeningOn: '3/11/2018', 
	}
];

const upcoming = [
	{ 
		id: 4, 
		createdOn: '1/3/2019', 
		title: 'meetup for designers',
		location: 'Abuja', 
		description: 'making difference', 
		happeningOn: '12/3/2019', 
	},
	{ 
		id: 5, 
		createdOn: '1/01/2019', 
		location: 'Worri', 
		images: 'meetup image', 
		topic: 'health sound', 
		happeningOn: '4/01/2019', 
		tag: 'health' 
	},
	{ 
		id: 6, 
		createdOn: '25/10/2019', 
		location: 'Portharcourt', 
		images: 'meetup image', 
		topic: 'wild poultry', 
		happeningOn: '3/11/2018', 
		tag: 'livestock' 
	}
];

meetups.push(upcoming);

export default meetups;