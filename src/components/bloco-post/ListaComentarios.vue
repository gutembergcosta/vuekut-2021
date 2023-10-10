<template>
    <div class="lista-comentarios">
        <BoxComentario/>
        
        <div class="text-center my-1">
            <a>Ver todos comentários</a>
        </div>
    </div>
</template>


<script>

	import BoxComentario from './BoxComentario.vue'

	export default {
		components: {
			BoxComentario,
            
		}
	}


</script>