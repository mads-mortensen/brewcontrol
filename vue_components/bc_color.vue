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
	.bc-color-colorbox(
		v-bind:style="{ backgroundColor: beerColorHex }"
	)
	.bc-color-description(
		v-if="options.hideDescription.value != 'True'"
	)
		h1 Beer color
		p Color description: <b>{{ beerColorDescription }}</b>
		p EBC: <b>{{ beer.data.target_ebc }}</b>
</template>

<script>

	var BC = require('./bc_component.js');
	var bc = new BC();
	bc.id = 'bc_color';
	bc.name = 'Color';
	bc.directive = 'bc-color';
	bc.options = {
		colorDescription:  new bc.Option({
			name: 'Color description',
			id: 'colorDescription',
		}),
		colorHex: new bc.Option({
			name: 'Color (hex value)',
			id: 'colorHex',
		}),
		hideDescription: new bc.Option({
			name: 'Hide description?',
			id: 'hideDescription',
			type: 'Boolean',
			value: false
		})
	}

	export default {
		bc: bc,
		props: ['beer', 'component'],
		data: function() {
			return {
				colors: require('../js/data/beer_color_list'), //TODO: this is not good?
				options: bc.optionValues()
			}
		},
		computed: {
			beerColorHex: function() {
				return this.options.colorHex.value || "#" + this.calculatedColor().colorCode;
			},
			beerColorDescription: function() {
				return this.options.colorDescription.value || this.calculatedColor().colorDescription;
			}
		},
		methods: {
			EbcToSrm: function(ebc) {
				return ebc * 0.508;
			},
			calculatedColor: function() {
				var colorSrm = this.EbcToSrm(this.beer.data.target_ebc), closestValue = 100000;
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
