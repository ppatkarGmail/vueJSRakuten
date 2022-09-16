import {
	createStore
} from 'vuex';

import axios from "axios";

// Create a new store instance.
const store = createStore({
	state() {
		return {
			count: 0,
			activities: null,
			randomActivity: "",
			errFlag: false

		}
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		newActivity(state, val) {
			state.activity = val;
			state.actArray.unshift(val)
		},
		setError(state, val) {
			state.errFlag = val;
		},
		setActivity(state, val) {
			state.randomActivity = val;
		}
	},
	getters: {
		lastN(state) {
			return function (n) {
				return state.actArray.slice(0, n);
			}
		}
	},

	actions: {
		incrementAsync({
			commit
		}) {
			setTimeout(() => {
				commit('increment')
			}, 1000)
		},
		getRandomActivity({
			commit
		}) {
			let url = 'http://www.boredapi.com/api/activity';
			commit("setError", false);
			return axios.get(url)
				.then((response) => {
					console.log(response.data);
					commit("setActivity", response.data.activity);
				}).catch((e) => {
					console.log("error", e)
					commit("setError", true);
				})
		}

	},

})

export default store;