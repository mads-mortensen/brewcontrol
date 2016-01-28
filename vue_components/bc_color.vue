<style>
	.bc-color-colorbox {
		flex: 1;
	}
	.bc-color-description {
		flex: 2;
		padding: 0 1em 0 1em;
	}
	bc-color {
		background-color: #6C6D7A;
		display: inline-block;
	}
</style>

<template lang='jade'>
bc-color.bc-component.large
	.bc-color-colorbox(v-bind:style="{ backgroundColor: beerColorHex }")
	.bc-color-description
		h1 Beer color
		p Color description: <b>{{ beerColorDescription }}</b>
		p EBC: <b>{{ beer.data.target_ebc }}</b>
</template>

<script>
	var beer_color_list = require('../js/constants/beer_color_list')

	export default {
		props: ['beer', 'component_data'],
		data: function() {
			return {
				data: $.parseJSON(this.component_data.data.data), //TODO: This is.. data. and stupid to parse json here :(
				colors: beer_color_list
			}
		},
		computed: {
			beerColorHex: function() {
				return "#" + this.calculatedColor().colorCode;
			},
			beerColorDescription: function() {
				return (this.data.color_description) ? this.data.color_description : this.calculatedColor().colorDescription;
			}
		},
		methods: {
			EbcToSrm: function(ebc) {
				return ebc * 0.508;
			},
			calculatedColor: function() {
				var colorSrm = this.EbcToSrm(this.beer.data.target_ebc);
				var closestValue = 100000;
				for (var value in this.colors) {
					if (Math.abs(parseFloat(value) - parseFloat(colorSrm)) < Math.abs(parseFloat(closestValue) - parseFloat(colorSrm))) {
						closestValue = value;
					}
				}

				return this.colors[closestValue];
			}
		}
	}
</script>
