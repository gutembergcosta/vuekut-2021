<template>
    <div class="dropdown d-btn-3">
        <button class="btn" @click="showDropDown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <div class="dropdown-menu" v-click-outside="hideDropDown" :class="{ 'd-block': showDropDownAvatar }" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Destacar</a>
            <a class="dropdown-item" href="#">Excluir</a>
        </div>
    </div>
</template>

<script>

    /*
    <a class="nav-link" @click="showDropDown" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 35px">
        <img class="avatar  d-block rounded-circle w-100" src="http://localhost/vuekut/php/profiles/profile.png" >
    </a>
    <div class="dropdown-menu" :class="{ 'd-block': showDropDownAvatar }" aria-labelledby="navbarDropdownMenuLink">
        <div  v-click-outside="hideDropDown" >
    */

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

<style >
    .d-btn-3{
        margin-left: 0.7rem
    }
</style>