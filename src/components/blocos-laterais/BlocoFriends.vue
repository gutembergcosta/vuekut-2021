<template>
	<div class="card bg-white mb-3 p-2">
		<div>
			<strong>Amigos</strong>
		</div>
		
		<div class="container">
			<div class="row">
				<a v-for="item in data" :key="item.id" class="col-md-4 d-flex flex-column p-2 box-user" >
					<div class="box-item">
						<img class="d-block rounded-circle w-100 mb-1" :src="item.img" >
						<span class="d-block text-center nome">{{item.nome}}</span>
					</div>
				</a>
			</div>
		</div>
		<div class="text-right my-1">
			<a class="ver-todos link-base">Ver todos</a>
		</div>
	</div>
</template>

<script>
	//' + item.id + '.png
	export default {
		data() {
			return {
				errors: [],
				data: [
					{
						id: 1,
						nome: 'Judau Ashta',
						img: 'http://localhost/vuekut/php/profiles/01.png',
						slug: 'slug'
					},
					{
						id: 2,
						nome: 'Miriallia Zabi',
						img: 'http://localhost/vuekut/php/profiles/02.png',
						slug: 'slug'
					},
					{
						id: 3,
						nome: 'Sharbat Gulla',
						img: 'http://localhost/vuekut/php/profiles/03.png',
						slug: 'slug'
					},
					{
						id: 4,
						nome: 'Sayla Mass',
						img: 'http://localhost/vuekut/php/profiles/04.png',
						slug: 'slug'
					},
					{
						id: 5,
						nome: 'Haman Karn',
						img: 'http://localhost/vuekut/php/profiles/05.png',
						slug: 'slug'
					},
					{
						id: 6,
						nome: 'Amuro Rai',
						img: 'http://localhost/vuekut/php/profiles/06.png',
						slug: 'slug'
					},
					
				]
					
				
						
			}
		}
	}

</script>

<style scoped>

	
	.nome{
		font-size:12px
	}

	.ver-todos{
		font-size:12px
	}

	.box-user span{
			font-weight: 500;
		}
	

</style>


