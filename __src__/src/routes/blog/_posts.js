// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "This is annoying >_<",
		date: "05/02/2021",
		slug: "this-is-annoying",
		html: `&emsp; &emsp; I hate bugs.... don't we all? I'm trying to add the date next to the name of the blog posts, and well, if you're here before it gets fixed, you can see that it just says <i>undefined</i>. Then again, I'm new to this Sapper thing... so chances are I'm just doing something wrong. xD 
		`
	},
	{
		title: "Hello, World!",
		date: "05/02/2021",
		slug: "hello-world",
		html: `&emsp; &emsp; Hello world! Welcome to my website! I made this as a place to post my games, videos, devlogs, etc. And it was fun learning web dev along the way! Keep in mind that the site is still a big work in progress! Stay tuned!	
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
