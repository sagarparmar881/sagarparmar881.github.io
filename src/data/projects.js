// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'AR Enterprises Vapi',
		category: 'Website',
		img: require('@/assets/images/project01.jpg'),
		link:'/projects/ar-project'
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		link:'/projects/ar-project'
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
		link:'/projects/single-project'
	},

];

export default projects;
