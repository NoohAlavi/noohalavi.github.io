// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "New Game! :D",
		_date: "15/02/2021",
		slug: "new-game",
		html: `&emsp; &emsp; Hey everyone! I've decided to start a new project and thought it would be a good idea to post some devlogs here! The game is gonna be a platformer`
	},
	{
		title: "This is annoying >_<",
		date: "05/02/2021",
		slug: "this-is-annoying",
		html: `&emsp; &emsp; I hate bugs.... don't we all? I'm trying to add the date next to the name of the blog posts, and well, if you're here before it gets fixed, you can see that it just says <i>undefined</i>. Then again, I'm new to this Sapper thing (<a href="https://sapper.svelte.dev">Sapper</a> is an application framework powered by svelte, which I am using for this project)... so chances are I'm just doing something wrong... xD
		<br>&emsp; &emsp; At the moment, the posts are stored in a .js file, which is being read by <i>blog/index.svelte</i>. The js file looks something like the code shown below (you can find the full source code at <a href="noohalavi.github.io/source">noohalavi.github.io/source</a>)
		<pre><code>
const posts = [
	{
		title: "example_title",
		date: "example_date",
		slug: "example_slug"
		html: 'content goes here'
	}
]
};
		</code></pre>
		&emsp;&emsp; But I'm not too worried. I'll solve it eventually...
		<br><br><br>&emsp;&emsp;Right?
		`
	},
	{
		title: "Hello, World!",
		_date: "05/02/2021",
		slug: "hello-world",
		html: `&emsp; &emsp; Hello world! Welcome to my website! I made this as a place to post my games, videos, devlogs, etc. And it was fun learning web dev along the way! Keep in mind that the site is still a big work in progress! Stay tuned!	
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
