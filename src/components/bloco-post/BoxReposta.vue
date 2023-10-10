<template>
    <div class=" box-comentario d-flex justify-content-start  gravatar py-2 ">
        <div class="comment-gravatar">
            <img class="avatar  d-block rounded-circle" src="http://localhost/vuekut/php/profiles/profile.png">
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
        </div>
    </div>
</template>

<script>

	import TopoComentario from './TopoComentario.vue'

	export default {
		components: {
			TopoComentario,
            
		}
	}

</script>