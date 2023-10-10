<template>
	
	<div class="card bg-white mb-3 p-2">
		<div>
			<strong>Comunidades</strong>
		</div>
		<div class="d-flex flex-column">
			<a v-for="item in data" :key="item.id" class=" box-item d-flex justify-content-between  align-items-center row-comunidade p-2" >
				<div class="avatar-comunidade">
					<img class="d-block rounded-circle w-100 mb-1 " :src="item.img" >
				</div>
				<div class="titulo-comunidade">
					<span class="d-block nome">{{item.nome}}</span>
				</div>
				<div class="area-qte">
					<span class="badge badge-pill badge-primary text-right pink accent-2">{{item.qte}}</span>
				</div>
			</a>
		</div>
		<div class="text-right my-1">
			<a class="ver-todos link-base">Ver todos</a>
		</div>
	</div>
		
</template>


<script>

	export default {
		data() {
			return {
				errors: [],
				data: [
					
					
					{
						id: 3,
						nome: 'Abro a geladeira para pensar',
						img: 'http://localhost/vuekut/php/comunidades/03.png',
						slug: 'slug',
						qte: 321
					},
					{
						id: 4,
						nome: 'Fonte comic sans deveria ser crime',
						img: 'http://localhost/vuekut/php/comunidades/04.png',
						slug: 'slug',
						qte: 321
					},
					{
						id: 5,
						nome: 'BH é meu país',
						img: 'http://localhost/vuekut/php/comunidades/05.png',
						slug: 'slug',
						qte: 321
					},
					{
						id: 1,
						nome: 'Blender 3D',
						img: 'http://localhost/vuekut/php/comunidades/01.png',
						slug: 'slug',
						qte: 321
					},
					{
						id: 2,
						nome: 'Sou legal, não estou te dando mole',
						img: 'http://localhost/vuekut/php/comunidades/02.png',
						slug: 'slug',
						qte: 321
					},
					
				]
			}
		}
	}

</script>

<style scoped lang="scss">

	.row-comunidade{

		&:hover{
			background: #e3f2fd;
		}

		.avatar-comunidade{
			width: 18%;
		}
		.titulo-comunidade{
			width: 66%;
			font-weight: 500;
		}
		.area-qte{
			width: 10%;
		}
	}
	


	

	.ver-todos{
		font-size:12px
	}

</style>