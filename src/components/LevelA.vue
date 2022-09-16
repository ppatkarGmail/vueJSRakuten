<template>
	<div>
		<div> {{ name}} </div>
		<LevelB></LevelB>
	</div>
</template>

<script>

import LevelB from "./LevelB.vue";

export default {
	name:"LevelA",
	components:{
		LevelB:LevelB
	},
	inject:["name"]
}



</script>
