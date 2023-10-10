<template>
<div class="autor mb-2">
    <ul class="list-unstyled mb-0 d-flex  justify-content-between">
        <li class="nome font-weight-bold">Fulano de tal</li>
        <li class="data-publicacao text-muted d-flex align-items-center">
            <span class="d-block text-muted">03/12/2022</span> 
            <DropDownOptionPost/>
        </li>
    </ul>
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