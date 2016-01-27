<style>
	bc-developer-bar {
		clear: both;
		position: relative;
		z-index: 10;
		height: 3em;
		line-height: 3em;
		margin-top: -3em;
		background-color: #263238;
		color: #FFFFFF;
		display: block;
	}
</style>

<template lang='jade'>
bc-developer-bar
</template>

<script>
	export default {
		props: ['beer']
	}
</script>
