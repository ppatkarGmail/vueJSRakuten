<template>
	<div>
	<h1>Slot App</h1>
	<div>
	<SlotComp>
		<template v-slot:header>
			<FirstComponent></FirstComponent>
		</template>
		<template v-slot:footer>
			Slot footer
		</template>
		Dummy text - goes in default slot unnamed

	</SlotComp>
	</div>
	</div>

</template>

<script>
import SlotComp from "../components/SlotComp.vue"
import FirstComponent from "../components/FirstComponent.vue"

export default {
	name: 'SlotApp',
	components:{
		SlotComp:SlotComp,
		FirstComponent:FirstComponent
	},
	data() {
		return{
			id:"b001",
			content:"Slot Button"
		}
	},
}
</script>

