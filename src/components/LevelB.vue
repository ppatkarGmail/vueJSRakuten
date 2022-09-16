<template>
	<div>
		<h1>Level 2 Component</h1>
		<div>
		<p> LevelB Name {{ name}}  {{ city }}</p>

		</div>
	</div>
</template>

<script>
export default {
	name:"LevelB",
	inject:["name","city"]

}



</script>
