// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "Hello, World!",
		date: "05/02/2021",
		slug: "hello-world",
		html: `&emsp; &emsp; Hello world! Welcome to my website! I made this as a place to post my games, videos, devlogs, etc. And it was fun learning web dev along the way! Stay tuned!	
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
