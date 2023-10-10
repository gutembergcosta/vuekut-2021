<template>
	
    <div  class="">
		<div v-for="item in dataPosts" :key="item.id"  class="box-post card bg-white mb-3">
			<LinhaGravatar/>
			<LinhaTexto/>
			<LinhaReactions/>
			<LinhaFormComentario/>
			<div class='border-bottom  post-linha d-flex justify-content-between py-2 px-3'>
				<ListaComentarios/>
			</div>
		</div>

    </div>
</template>


<script>

	import ListaComentarios from './ListaComentarios.vue'
	import LinhaGravatar from './LinhaGravatar.vue'
	import LinhaTexto from './LinhaTexto.vue'
	import LinhaReactions from './LinhaReactions.vue'
	import LinhaFormComentario from './LinhaFormComentario.vue'

	export default {
		components: {
			ListaComentarios,
            LinhaGravatar,
            LinhaReactions,
            LinhaTexto,
            LinhaFormComentario,
		},
		data() {
			return {
				errors: [],
				dataPosts: [
					{
						id: 1,
						autor :{
							nome: 'Fulano de tal',
							avatar: 'https://dummyimage.com/400x400/000/fff',
						},
						slug: 'slug',
						data: '03/12/2022',
						isPropietario: 's',
						texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
						qteLikes: 15,
						qteComents: 3,
						qteShareds: 12,
						isMarcado: 's',
						comentarios : [
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							},
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							}
						]
						
					},{
						id: 2,
						autor :{
							nome: 'Fulano de tal',
							avatar: 'https://dummyimage.com/400x400/000/fff',
						},
						slug: 'slug',
						data: '03/12/2022',
						isPropietario: 's',
						texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
						qteLikes: 15,
						qteComents: 3,
						qteShareds: 12,
						isMarcado: 's',
						comentarios : [
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							},
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							}
						]
						
					},{
						id: 3,
						autor :{
							nome: 'Fulano de tal',
							avatar: 'https://dummyimage.com/400x400/000/fff',
						},
						slug: 'slug',
						data: '03/12/2022',
						isPropietario: 's',
						texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
						qteLikes: 15,
						qteComents: 3,
						qteShareds: 12,
						isMarcado: 's',
						comentarios : [
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							},
							{
								id: 1,
								autor :{
									nome: 'Fulano de tal',
									avatar: 'https://dummyimage.com/400x400/000/fff',
								},
								data: '03/12/2022',
								isPropietario: 's',
								texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
							}
						]
						
					},
			
				]
			}
		}
	
	
		
	}

	


</script>



<style scoped lang="scss">
	.box-post{
		.likes{color: navy;}
		.comment{color: navy;}
		.retweets{color: navy;}
		.avatar{width: 40px}
		.data-publicacao{font-size:12px}
	
	}

	.box-comentario{

	}

</style>
            