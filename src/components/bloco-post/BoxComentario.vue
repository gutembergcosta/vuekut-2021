<template>
    <div>
        <div v-for="item in data" :key="item.id" class=" box-comentario d-flex justify-content-start  gravatar py-2 ">
            <div class="comment-gravatar">
                <img class="avatar  d-block rounded-circle" src="http://localhost/vuekut/php/profiles/03.png">
            </div>
            <div class='border-bottom post-linha texto  texto py-2 px-3'>
                <TopoComentario/>
                <div class="comentario">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum,
                        odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus
                        nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui
                        a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.
                    </p>
                </div>
                <LinhaReactions/>
                <div class="lista-comentarios">
                    <BoxReposta/>
                </div>
            </div>
        </div>
    </div>
</template>




<script>

	import BoxReposta from './BoxReposta.vue';
	import LinhaReactions from './LinhaReactions.vue';
	import TopoComentario from './TopoComentario.vue';

	export default {
		components: {
			BoxReposta,
			LinhaReactions,
			TopoComentario,
            
		},
        data() {
			return {
				errors: [],
				data: [
					{
						id: 1,
						autor :{
							nome: 'Fulano de tal',
							avatar: 'http://localhost/vuekut/php/profiles/03.png',
						},
						slug: 'slug',
						data: '03/12/2022',
						isPropietario: 's',
						texto: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel felis orci. Duis elementum, odio vel finibus vehicula, lorem odio commodo libero, vitae accumsan nunc quam quis ex. Vivamus nulla nisl, tincidunt in tincidunt id, interdum ut orci. Nam et lacinia lacus. Sed facilisis dui a vestibulum tristique. Suspendisse commodo arcu sed euismod maximus. Nulla eu blandit justo.</p>',
						qteLikes: 15,
						qteComents: 3,
						qteShareds: 12,
						isMarcado: 's',
					},
				]
			}
		}
	}


</script>