<template>
	<div>
		<MyButton :id="id" content="My Button" @clicked="clicked"  ></MyButton>
		<TextBox label="Name" :value="tbox1" :instance="1" @changed="changed"></TextBox>
		<TextBox label="ContactNo" :value="tbox2" :instance="2" @changed="changed"></TextBox>
		<CheckBox label="Confirm?" :value="checked" @checkbox="check1"></CheckBox>

	</div>

</template>
<script>
import MyButton from "../components/MyButton.vue"
import TextBox from "../components/TextBox.vue"
import CheckBox from "../components/CheckBox.vue"

	export default {
		name: "RootComp",
		data() {
			return {
				id:"btn-001",
				text:"Button1",
				tbox1:"Tom",
				tbox2:"192929",
				checked:false
			}
		},
		components:{
		MyButton,TextBox,CheckBox
		},
		methods:{
			clicked(p){
				console.log("button has been clicked from parent",p)
			},
			changed(obj){
				console.log(obj)
				if (obj.instance === 1)
					this.tbox1 = obj.newVal;
				else
					this.tbox2 = obj.newVal;

				console.log(this.tbox1,this.tbox2)
			},
			check1(nv){
				this.checked = nv;
			}
		}
	}
</script>
