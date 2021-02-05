<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	console.log("I see that you're a dev! Don't worry - this website is open source at https://noohalavi.github.io/source");
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
		position: relative;
  		list-style: none;
	}

	li::before {
  		content: '>';
  		position: absolute;
  		left: 0;
		font-weight: bold;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>

<svelte:head>
	<title>Nooh Alavi - Blog</title>
</svelte:head>

<h1>Recent Posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
