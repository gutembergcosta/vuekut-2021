<template>
	<div class="intro d-flex align-items-center">
		<div class="container ">
			<div class="row">
				<div class="col-md-7 d-flex align-items-center">
					<div>
						<div class="mb-3">
							<img class="avatar  d-block w-100 " src="../assets/img/logo.png"  >
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
								ullamcorper dui dignissim, laoreet ante at, rhoncus enim. Nullam a 
								ligula sed, vulputate tempor tortor. Etiam id ex sit amet dolor 
								rhoncus tincidunt. </p>
						</div>
					</div>
				</div>
				<div class="col-md-4 offset-md-1">
					<div class="global-container">
						<div class="card login-form">
							<div class="card-body">
								<h3 class="card-title text-center">Login</h3>
								<div class="card-text">
									<form>
										<div class="form-group">
											<label for="exampleInputEmail1">Email</label>
											<input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
										</div>
										<div class="form-group">
											<label for="exampleInputPassword1">Senha</label>
											<a class="link-base" href="#" style="float:right;font-size:12px;">Esqueci minha senha</a>
											<input type="password" class="form-control form-control-sm" id="exampleInputPassword1">
										</div>
										<button type="submit" class="btn btn-base btn-block">Entrar</button>
										<div class="sign-up mt-3">
											Não tem uma conta? <a class="" href="#">Criar nova conta</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dadosGerais: [],
				errors: []
			}
		},		
	}
</script>


<style scoped lang="scss">

	h3{
		font-weight: 700;
		color: #ff4081;
	}
	
	.intro{
		height: 100vh;
	}

	.container{
		max-width: 1000px
	}

	label{
		font-weight: 500;
	}

</style>
