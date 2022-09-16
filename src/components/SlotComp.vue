<template>
	<div>
	<p><slot name="header"></slot></p>
	<p><slot name="footer"></slot></p>
	<slot></slot>
	</div>
</template>

<script>
export default{
	name:"SlotComp"
}
</script>
