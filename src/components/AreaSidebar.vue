<template>
	<div class="area ">
		<div class=" card bg-white mb-3 ">
			<div class="my-2 px-3">
				<img class="w-50 m-auto d-block rounded-circle" src="http://localhost/vuekut/php/profiles/profile.png" >
			</div>
			<div class="my-2 px-3">
				<p  class="font-weight-bold text-center">{{ data.nome }}</p>
				<ul class="list-unstyled data-list">
					<li>{{data.idade}}</li>
					<li>{{data.profissao}}</li>
					<li>{{data.cidade}}</li>
					<li>{{data.uf}}</li>
					<li>{{data.pais}}</li>
				</ul>
			</div>
			<div class="my-2 px-3">
				<ul class="list-unstyled data-list">
					<li><i class="fa-regular fa-user"></i> Pefil</li>
					<li><i class="fa-regular fa-pen-to-square"></i> Scraps</li>
					<li><i class="fa-regular fa-images"></i> Albuns</li>
					<li><i class="fa-solid fa-users"></i> Amigos</li>
					<li><i class="fa-solid fa-user-pen"></i> Depoimentos</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>


	export default {

		

		data() {
			return {
				dadosGerais: [],
				errors: [],
				data: {
					nome:'Nome do Usuário',
					idade:'21 anos',
					profissao: 'Profissão',
					cidade: 'Belo Horizonte',
					uf:'Minas Gerais',
					pais: 'Brasil',
				}
			}
		},
		
	
	}

</script>

<style scoped>
	

	.area{
		width: 20%
	}

</style>