<style>
</style>

<template lang='jade'>
bc-color {{ beer.data.name }} - {{ beer.data.style }}
</template>

<script>
	export default {
		props: ['beer']
	}
</script>
