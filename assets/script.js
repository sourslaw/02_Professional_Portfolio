console.log('hi from js')

const about = {
	about: "I am an information professional and web developer. I seek to deploy pleasing and thoughtful tools to improve efficienty and ease work with a mix of fun and mystery.",
	experience: "I have a Master's in Information Science and am currently engaged in a web development bootcamp. Previously, I've worked as a digital archivist and digital preservation manager for state governments and universities. I have extensive experience processing and managing large scale historical digital colletions and their asociated databases.",
	skills: "I am applying Agile methodology to learning a full stack comprised of JavaScript, HTML, CSS, Express, React, Node, MongoDB, and MySQL. I seek to produce, neat, accessible, and well documented code."
};

const projects = [
	{
		title: 'a title',
		description: 'a description',
		image: 'assets/images/paul_hanaoka_unsplash.jpg',
		link: 'https://github.com/sourslaw'
	},
	{
		title: 'a title',
		description: 'a description',
		image: 'assets/images/paul_hanaoka_unsplash.jpg',
		link: 'https://github.com/sourslaw'
	},
	{
		title: 'a title',
		description: 'a description',
		image: 'assets/images/paul_hanaoka_unsplash.jpg',
		link: 'https://github.com/sourslaw'
	},
	{
		title: 'a title',
		description: 'a description',
		image: 'assets/images/paul_hanaoka_unsplash.jpg',
		link: 'https://github.com/sourslaw'
	}
];

const experience = [ 
	{
		what: 'Web Developer Bootcamp Student',
		where: 'University of California, Davis',
		when: '2021'
	},
	{
		what: 'Digital Preservation Manager',
		where: 'California Revealed | California State Library',
		when: '2018-2021'
	},
	{
		what: 'Digital Archivist',
		where: 'Colorado State Archives',
		when: '2016-2018'
	},
	{
		what: 'Digital Archivist',
		where: 'Media Archeology Lab | University of Colorado, Boulder',
		when: '2016-2017'
	}
];

const contact = [
	{
		what:'email',
		link: 'mailto:lawanscott@gmail.com',
		symbol: 'fas fa-envelope fa-3x'
	},
	{
		what:'github',
		link: 'https://github.com/sourslaw',
		symbol: 'fab fa-github-alt fa-3x'
	},
	{
		what:'linkedin',
		link: 'https://www.linkedin.com/in/scottlawan/',
		symbol: 'fab fa-linkedin-in fa-3x'
	},
	{
		what:'instagram',
		link: 'https://www.instagram.com/scottlawan/',
		symbol: 'fab fa-instagram fa-3x'
	},
	{
		what:'twitter',
		link: 'https://twitter.com/herolawan',
		symbol: 'fab fa-twitter fa-3x'
	}
];


const aboutDisplayHole = document.getElementById('aboutDisplay');
const projectsDisplayHole = document.getElementById('projectsDisplay');
const experienceDisplayHole = document.getElementById('experienceDisplay');
const contactDisplayHole = document.getElementById('contactDisplay');

function aboutDisplay(about) {

	const aboutM = document.createElement('h2');
	aboutM.innerText = 'about';
	const aboutP = document.createElement('p');
	aboutP.innerText = `${about.about}`;
	const about2 = document.createElement('h2');
	about2.innerText = 'experience';
	const aboutP2 = document.createElement('p');
	aboutP2.innerText = `${about.experience}`;
	const about3 = document.createElement('h2');
	about3.innerText = 'skills';
	const aboutP3 = document.createElement('p');
	aboutP3.innerText = `${about.skills}`;

	aboutDisplayHole.append(aboutM, aboutP, about2, aboutP2, about3, aboutP3)
};

function projectsDisplay(projects) {
	for (i = 0; i < projects.length; i++) {

		const column = document.createElement('div');
		column.setAttribute('class', 'column is-half-desktop');
		const card = document.createElement('div');
		card.setAttribute('class', 'card')
		const cardImage = document.createElement('div');
		cardImage.setAttribute('class', 'card-image');
		const figure = document.createElement('figure');
		figure.setAttribute('class', 'image is-5by3');
		const aImage = document.createElement('a');
		aImage.setAttribute('href', `${projects[i].link}`);
		const image = document.createElement('img');
		image.setAttribute('src', `${projects[i].image}`)

		aImage.append(image);
		figure.append(aImage);
		cardImage.append(figure)
		card.append(cardImage);
		column.append(card);

		const content = document.createElement('div');
		content.setAttribute('class', 'content');
		const hThree = document.createElement('h3');
		hThree.innerText = `${projects[i].title}`;
		const pPer = document.createElement('p');
		pPer.innerText = `${projects[i].description}`;

		cardImage.append(content);
		content.append(hThree);
		content.append(pPer);

		projectsDisplayHole.append(column)
	};
};

function experienceDisplay(experience) {
	for (i = 0; i < experience.length; i++) {

		const content = document.createElement('div');
		content.setAttribute('class', 'content mt-6');
		const hThree = document.createElement('h3');
		hThree.innerText = `${experience[i].what}`;
		const hFour = document.createElement('h3');
		hFour.innerText = `${experience[i].where}`;
		const hFive = document.createElement('h3');
		hFive.innerText = `${experience[i].when}`;

		content.append(hFive);
		content.append(hFour);
		content.append(hThree);

		experienceDisplayHole.append(content);
	};
};

function contactDisplay(contact) {
	for (i = 0; i < contact.length; i++) {

		const liElement = document.createElement('li');
		
		const aContact = document.createElement('a');
		aContact.setAttribute('href',`${contact[i].link}`);

		const iElement = document.createElement('i');
		iElement.setAttribute('class', `${contact[i].symbol}`)

		aContact.append(iElement);
		liElement.append(aContact);

		contactDisplayHole.append(liElement);
	};
};

aboutDisplay(about);
projectsDisplay(projects);
experienceDisplay(experience);
contactDisplay(contact);
