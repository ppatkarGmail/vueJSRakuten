<template>
	<button :id="id" @click="clicked">{{content}}</button>
</template>
<script>
	export default {
		name: "MyButton",
		props:{
			"id":{
				type:[String,Number],
				default:"x001"
			},
			"content":{
				type:String,
				default:"Button Text"
			}
		},
		methods:{
			clicked(){
				console.log("clicked from component")
				this.$emit("clicked",1)
			}
		}
	}
</script>
