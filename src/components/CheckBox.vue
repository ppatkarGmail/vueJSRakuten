<template>
	<div>
		<label>{{label}}</label>
		<input type="checkbox" v-model="checked" :checked="value" />
	</div>
</template>


<script>
	export default {
		name: "TextBox",
		props: ["label", "value"],
		data() {
			return {
				checked:null
			}
		},
		created(){
			this.checked - this.value;
		},
		watch:{
			checked(nv){
				console.log("chec box change ")
				this.$emit("checkbox",nv)

			}
		}

	}
</script>
