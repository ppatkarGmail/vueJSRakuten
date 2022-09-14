<template>
	<div>
		<MyButton ></MyButton>

	</div>

</template>
<script>
import MyButton from "../components/MyButton.vue"

	export default {
		name: "RootComp",
		data() {
			return {
				id:"btn-001",
				text:"Button1"
			}
		},
		components:{
		MyButton
		}
	}
</script>
