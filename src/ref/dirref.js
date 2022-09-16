const myDirective = {
	// called before bound element's attributes
	// or event listeners are applied
	created(el, binding, vnode, prevVnode) {
		// see below for details on arguments
	},
	// called right before the element is inserted into the DOM.
	beforeMount(el, binding, vnode, prevVnode) {},
	// called when the bound element's parent component
	// and all its children are mounted.
	mounted(el, binding, vnode, prevVnode) {},
	// called before the parent component is updated
	beforeUpdate(el, binding, vnode, prevVnode) {},
	// called after the parent component and
	// all of its children have updated
	updated(el, binding, vnode, prevVnode) {},
	// called before the parent component is unmounted
	beforeUnmount(el, binding, vnode, prevVnode) {},
	// called when the parent component is unmounted
	unmounted(el, binding, vnode, prevVnode) {}
}

app.directive('name', (el, binding) => {
	// this will be called for both `mounted` and `updated`
	el.style.name = binding.value
})