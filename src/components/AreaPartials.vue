<template>
	<div class="d-flex justify-content-between area-pagina">
        <AreaPosts/>
        <AreaLateral/>
    </div>
</template>

<script>

	import AreaLateral from './AreaLateral.vue';
	import AreaPosts from './AreaPosts.vue';

	export default {
		components: {
			AreaLateral,
			AreaPosts,
		}
	}

</script>

<style scoped>


</style>
