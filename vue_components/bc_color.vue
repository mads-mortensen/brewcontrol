<style>
</style>

<template>
	<bc-color>
		{{ beer.data.name }} - {{ beer.data.style }}
	</bc-color>
</template>

<script>
	export default {
		props: ['beer']
	}
</script>
