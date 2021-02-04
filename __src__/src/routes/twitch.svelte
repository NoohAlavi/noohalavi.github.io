<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

</style>

<svelte:head>
	<title>NA Games - Twitch</title>
</svelte:head>

<!-- Add a placeholder for the Twitch embed -->
<div id="twitch-embed"></div>

<!-- Load the Twitch embed script -->
<script src="twitch.js"></script>

<!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
<!-- <script type="text/javascript">
  new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "opsci",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["noohalavi.github.io", "github.io", "localhost", "pages.github.com"]
  });
</script> -->