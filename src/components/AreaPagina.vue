<template>
	<div class="container d-flex justify-content-between ">
		<AreaSidebar/>
		<AreaPartials/>
		
	</div>
</template>

<script>

	import AreaSidebar from './AreaSidebar.vue';
	import AreaPartials from './AreaPartials.vue';

	export default {
		components: {
			AreaSidebar,
			AreaPartials,
		}
	}

</script>

<style scoped>
	.area-pagina{width: calc(80% - 20px)}

</style>
