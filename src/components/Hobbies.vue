<template>
	<div>
		<h2>Hobbies</h2>
		<p v-for="h in hobbies" v-bind:key="h">{{h}}</p>
	</div>

</template>
<script>
import contactsData from "../data/contacts.js";
export default {
	name: 'Hobbies',
	data () {
		return {
			contacts:contactsData,
			paramid:this.$route.params ? parseInt(this.$route.params.id) : 0

		}
	},
	computed:{
		hobbies(){
			let a = this.contacts.filter((a)=>{return a.id===this.paramid});
			console.log("hobbies",a)
			return a[0].hobbies;
		}
	}
}
</script>