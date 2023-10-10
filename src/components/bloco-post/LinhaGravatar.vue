<template>
<div class='border-bottom  post-linha d-flex justify-content-between py-2 px-3'>
            <div class="d-flex justify-content-start align-items-stretch gravatar py-2 ">
                <div class="">
                    <img class="avatar  d-block rounded-circle" src="http://localhost/vuekut/php/profiles/profile.png" >
                </div>
                <div class="autor ml-2">
                    <ul class="list-unstyled mb-0 ml-0">
                        <li class="nome font-weight-bold text-dark">Nome do Usuário</li>
                        <li class="arroba text-muted">@fulano</li>
                    </ul>
                </div>
            </div>
            <div class="data-publicacao d-flex align-items-center">
                <span class="d-block text-muted">03/12/2022</span> 
                <DropDownOptionPost/>
            </div>
        </div>

</template>

<script>

	import DropDownOptionPost from './DropDownOptionPost.vue'

	export default {
		components: {
			DropDownOptionPost
		}
	}


</script>