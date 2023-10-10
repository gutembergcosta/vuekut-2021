<template>
	<div class="area ">
		
		<FormPost/>
		<BlocoPost ></BlocoPost>
		
	</div>
</template>

<script>

	import FormPost from './forms/FormPost.vue'
	import BlocoPost from './bloco-post/BlocoPost.vue'

	export default {
		components: {
			FormPost,BlocoPost
		},
		
		
		
	}


</script>


<style scoped>
	.area{width: calc(64% - 20px)}

</style>

<style lang="scss">
	.box-post{
		.likes{color: navy;}
		.comment{color: navy;}
		.retweets{color: navy;}
		.bookmark{color: navy;}
		.avatar{width: 40px}
		
		.data-publicacao{font-size:12px; }
		.reactions{
			li{margin-right: 0.8rem}
		}
	}

	.box-comentario{

	}

</style>