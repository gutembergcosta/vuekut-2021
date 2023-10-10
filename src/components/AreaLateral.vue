<template>
	<div class="area ">
		<BlocoFriends/>
		<BlocoComunidades/>
	</div>
</template>

<script>

	import BlocoFriends from './blocos-laterais/BlocoFriends.vue'
	import BlocoComunidades from './blocos-laterais/BlocoComunidades.vue'

	export default {
		components: {
			BlocoFriends,BlocoComunidades
		}
	}

</script>

<style scoped>

	.area{
		width: 36%
	}

</style>