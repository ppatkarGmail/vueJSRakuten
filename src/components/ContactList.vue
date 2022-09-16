<template>
	<div>
		<h2>Contact List</h2>
		<table>
			<tr v-for="(c,index) in contacts" v-bind:key='index'>
				<td><router-link :to="'/contact/' + c.id">{{c["id"]}}</router-link> </td>
				<td>{{c["first_name"]}}</td>
				<td>{{c["last_name"]}}</td>
				<td>{{c["age"]}}</td>
				<td><button @click="openContact(c.id)">Open</button></td>
			</tr>
		</table>
	</div>

</template>
<script>

import contactsData from "../data/contacts.js";
import router from "../routes/router.js";

export default {
	name: 'ContactList',
	data () {
		return {
			contacts:contactsData
		}
	},
	methods:{
		openContact(id) {
			router.push({name:"contact",params:{id:id}});
		}
	}
}
</script>