<template>
	<div>
		<div>Count1 : {{ count1 }} </div>
		<div>Count2 : {{ count1 }} </div>
		<div>
			<button @click="updateCount()">Update Count</button>
		</div>
		<div>
			<label>Activity: </label>
			<input type="text" v-model="activity" style="width: 300px;"/>
		</div>
		<div>
			<button @click="suggest()">Suggest Activity</button>
			<button @click="add()">Add Activity</button>
		</div>

	</div>

</template>

<script>
import { mapState } from 'vuex';

export default {
	name: "VuexApp",
	data() {
		return {
			activity:""
		}
	},
	methods: {
		updateCount() {
			this.$store.commit("increment");
		},
		updateAsync(){
			this.$store.dispatch("incrementAsync");
		},
		suggest() {
			this.$store.dispatch("getRandomActivity").then((r)=>{
				if (!this.hasError) {
					this.activity = this.random;
				}
			}


			)

		}
	},
	computed: {
		countSquare() { return this.count ** 2 },
		...mapState(
			{
				count1: state => state.count,
				count2: "count",
				random: "randomActivity",
				hasError:"errFlag"
			}
		)
	}
}

</script>

