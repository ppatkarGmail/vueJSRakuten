<template>
	<div>

		<h1>Reactive App</h1>
		{{ person.name}}
		{{ person.age}}
		{{ num}}
		<button @click="increment">Increment</button>
	</div>
</template>
<script setup>
import { reactive, ref} from 'vue';
const person = reactive({
	name: "John",
	age: 30
});

const increment = reactive(() => person.age++);

const num = ref(0);


</script>
