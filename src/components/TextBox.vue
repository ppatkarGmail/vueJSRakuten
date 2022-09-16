<template>
	<div>
		<label>{{label}}</label>
		<input type="text" v-model="model" />
	</div>
</template>


<script>
	export default {
		name: "TextBox",
		props: ["label", "value","instance"],
		data() {
			return {
				model:null
			}
		},
		created(){
			this.model = this.value
		},
		watch:{
			model(nv,ov){
				console.log("text changed",this.instance)
				this.$emit("changed",
					{
						instance:this.instance,
						newVal:nv,
					}
				)

			}
		}
	}
</script>
