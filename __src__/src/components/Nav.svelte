<script>
	export let segment;

	import favicon from "../../static/favicon.png";
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		/* background-color: rgb(255,62,0); */
		background-color: #87cefa;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a:hover {
		font-weight: bold;
		/* text-decoration: underline; */
	}

	.icon {
		width: 35%;
		height: 35%;
	}
</style>

<nav>
	<ul>
		<li><a href=" "><img class="icon" alt="Icon" src="{favicon}"></a></li>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About Me</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">My Blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'games' ? 'page' : undefined}" href="games">My Games</a></li>
		<li><a rel=prefetch aria-current="{segment === 'yt' ? 'page' : undefined}" href="https://www.youtube.com/channel/UC2W0dJwYSOHm4Rn1p17P6qg">My YouTube</a></li>
		<li><a rel=prefetch aria-current="{segment === 'twitch' ? 'page' : undefined}" href="https://www.twitch.tv/opsci">My Twitch</a></li>
	</ul>
</nav>
