
<template>


	<div>
		<MiniTopo/>
		<AreaPagina/>		
	</div>
	

  <!-- Button trigger modal -->

</template>

<script>
	
	import MiniTopo from '../components/MiniTopo.vue';
	import AreaPagina from '../components/AreaPagina.vue';

	export default {
		name: 'App',
		components: {
			MiniTopo,
			AreaPagina,
		},
		data() {
			return {
				dadosGerais: [],
				errors: []
			}
		},		
	}
</script>

