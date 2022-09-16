<template>
	<div>
		Provide App
		<LevelA></LevelA>
	</div>

</template>

<script>
import LevelA from "../components/LevelA.vue";

export default {
	name: 'ProvideApp',
	data() {
		return {
			name: "XYZ"
		}
	},
	components:{
		LevelA:LevelA
	},
	provide() {
		return {
			name: this.name
		}
	}
}
</script>

