<template>
	<div class="topo w-100 mb-2" >
        <div class="container">
			<nav class="navbar navbar-expand-lg navbar-light px-0 ">
				<a class="navbar-brand" href="#">
					<img class="avatar  d-block " src="../assets/img/logo.png" style='width:130px' >
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
					<div class="busca rounded-pill">
						<form class="form-inline my-2 my-lg-0">
							<input class="form-control mr-sm-2" type="search" placeholder="Buscar amigos">
							<button class="btn  my-2 my-sm-0" type="submit">
								<i class="fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
					</div>
					<div>
						<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
							<li class="nav-item">
								<router-link class="nav-link link-texto" to="/login">Login</router-link>
							</li>
							<li class="nav-item active">
								<a class="nav-link link-texto link-base" href="#">
									<i class="fa-regular fa-pen-to-square"></i>
									Mural 
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link link-texto link-base" href="#">
									<i class="fa-solid fa-user-group"></i>
									Amigos
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link link-texto link-base" href="#">
									<i class="fa-solid fa-images"></i>
									Fotos
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link link-texto link-base" href="#">
									<i class="fa-solid fa-users-rectangle"></i> 
									Comunidades
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link link-texto link-base" href="#">
									<i class="fa-regular fa-bell"></i>
									Notificações 
									<span class="badge badge-primary pink accent-2">1</span>
								</a>
							</li>
							
							<li class="nav-item dropdown mr-0">
								<a class="nav-link" @click="showDropDown" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 35px">
									<img class="avatar  d-block rounded-circle w-100" src="http://localhost/vuekut/php/profiles/profile.png" >
								</a>
							

								<div class="dropdown-menu dropdown-negativo" v-click-outside="hideDropDown" :class="{ 'd-block': showDropDownAvatar }" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#">Arquivados</a>
									<a class="dropdown-item" href="#">Editar Perfil</a>
									<a class="dropdown-item" href="#">Configurações</a>
									<a class="dropdown-item" href="#">Sair</a>
								</div>
									
							</li>
						</ul>
					</div>
					
				</div>
			</nav>
		</div>
    </div>
</template>

<script>

	export default {
		data() {
			return {
				dadosGerais: [],
				errors: [],
				showDropDownAvatar: false,
				
			}
		},
		methods: {
			showDropDown : function() {
				setTimeout(()=> {
					this.showDropDownAvatar = !this.showDropDownAvatar;
				},0)
			},
			hideDropDown : function() {
				if(this.showDropDownAvatar){
					this.showDropDownAvatar = false
				}
				
			},
		},
				
	}
</script>

<style lang="scss">
	.topo{

		.navbar-nav {


			.nav-item {
				margin-right: 20px;
				.nav-link{
					padding: 0;
				}

				

				.link-texto{
					
					line-height: 36px;

					i{font-size:12}
				}
			}
		}

		
	}

	.busca{
		background: #fff; 

		input{
			background: none;
			border: none;
			color: #ededed!important
		}

		input[type="text"]:focus{
			background: none;
			border: none;
			color: #ededed!important;
			border-color: none;
			outline: 0 none;
		}

		

		button{
			color: #ededed!important
		}
	}

	.dropdown-negativo{
		right:0!important;
		left: initial!important;
	}


</style>