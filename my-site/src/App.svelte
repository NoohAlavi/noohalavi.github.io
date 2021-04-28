<script>
	export let num = 0;
	export let text = "Pressed 0 times";

	function increaseNum() {
		num++;
		text = `Pressed ${num} times`
	}
</script>

<svelte:head>
	<title>Nooh Alavi</title>
</svelte:head>

<main>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About Me</a></li>
			<li><a href="#">My Blog</a></li>
		</ul>
	</nav>
	<h1 class="title">Nooh Alavi</h1>
</main>

<style>

	.title {
		text-align: center;
	}

	nav {
		position: absolute;
		left: 0px;
	}

	nav ul li {
		margin-bottom: 15px;
		list-style-type: none;
	}

	nav ul li a {
		color: #333333;
		font-size: large;
	}
</style>