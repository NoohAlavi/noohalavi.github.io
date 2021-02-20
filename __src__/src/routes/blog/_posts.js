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
		_date: "19/02/2021",
		slug: "new-game",
		html: `&emsp; &emsp; <u><i>19/02/2021</i></u>
		<br><br>&emsp; &emsp;Hey everyone! I've decided to start a new project and thought it would be a good idea to post some devlogs here! The game is gonna be a platformer game, with the multiverse incorporated.
		<br><br>&emsp; &emsp;The protagonist is going to be able to control space-time, with powers such as rewinding time, and having the ability to create matter (in the form of platforms). He will also be able to travel in-between the different dimensions and worlds in the multiverse. I'm planning on adding many different dimensions, including but not limited to:
		<br>
		<ul>
			<li>
				<b>Main Dimension</b> - <i>Earth; Normal Dimension</i>
			</li>
			<li>
				<b>Micro Dimension</b> - <i>Similar to main dimension, but everything is small</i>
			</li>
			<li>
				<b>Mega Dimension</b> - <i>Similar to main dimension, but everything is big</i>
			</li>
			<li>
				<b>Fire Dimension</b> - <i>Fire, lava, and molten rock everywhere. Home to fire demon things, and one of the bosses of the game!</i>
			</li>
			<li>
				<b>Ice Dimension</b> - <i>All frozen, subzero temperatures, and alot of sharp glaciers. Home to ice monster creatures, and one of the bosses of the game!</i>
			</li>
			<li>
				<b>Mirror Dimension</b> - <i>Completely identical to the normal dimension, and home to the <u>Doppelganger</u>, the game's final boss - a duplicate version of the player character who has the same powers</i>
			</li>
		</ul> 
		<br>&emsp; &emsp; I also wanted to balance the player's SPACE TIME MANIPULATION powers, so I decided to add this dimension as well:
		<ul>
			<li>
				<b>Spirit Dimension</b> - <i>If the player abuses their time-space powers, they get sent to the spirit dimension. In this dimension, Time works differently, changing the player's very particles. He has to quickly escape the dimension, before its too late... before he gets ripped apart. Also, all beings subject to this dimension leave a solid state, hence its name, making powers to create platforms and such useless.</i>
			</li>
			</li>
		</ul>
		<br>&emsp; &emsp; Yeah.... I gotta work on those names lol.
		<br><br>&emsp; &emsp; If you want to keep up with the development, follow me on my <a href="https://www.youtube.com/channel/UC2W0dJwYSOHm4Rn1p17P6qg">YouTube</a> and my <a href="https://www.twitch.tv/opsci">Twitch</a>, where I'll try to post devlogs! Also stay tuned here as well! And I'd love feedback and/or ideas - if you've got any, let me know on YouTube, Twitch, or in my <a href="https://discord.gg/vxvksvd/">Discord Server</a>! Cya next time everyone!
		`
	},
	{
		title: "This is annoying >_<",
		date: "05/02/2021",
		slug: "this-is-annoying",
		html: `&emsp; &emsp; <u><i>05/02/2021</i></u>
		<br><br>&emsp; &emsp; I hate bugs.... don't we all? I'm trying to add the date next to the name of the blog posts, and well, if you're here before it gets fixed, you can see that it just says <i>undefined</i>. Then again, I'm new to this Sapper thing (<a href="https://sapper.svelte.dev">Sapper</a> is an application framework powered by svelte, which I am using for this project)... so chances are I'm just doing something wrong... xD
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
		html: `&emsp; &emsp; <u><i>05/02/2021</i></u>
		<br><br>&emsp; &emsp; Hello world! Welcome to my website! I made this as a place to post my games, videos, devlogs, etc. And it was fun learning web dev along the way! Keep in mind that the site is still a big work in progress! Stay tuned!	
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
