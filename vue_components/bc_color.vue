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
	export default {
		props: ['beer', 'component_data'],
		data: function() {
			return {
				data: $.parseJSON(this.component_data.data.data), //TODO: This is.. data. and stupid to parse json here :(
				colors: {
					0	: { colorCode: "ffffff", colorDescription: "	White"},
					0.5	: { colorCode: "fbf0cb", colorDescription: "Champagne"},
					1	: { colorCode: "f7e1a1", colorDescription: "Candleglow"},
					1.5	: { colorCode: "f4d380", colorDescription: "Broadway Lights"},
					2	: { colorCode: "f0c566", colorDescription: "Cream Can"},
					2.5	: { colorCode: "edb950", colorDescription: "Casablanca"},
					3	: { colorCode: "e9ad3f", colorDescription: "Tulip Tree"},
					3.5	: { colorCode: "e5a231", colorDescription: "Fire Bush"},
					4	: { colorCode: "e19726", colorDescription: "Buttercup"},
					4.5	: { colorCode: "dd8d1d", colorDescription: "Zest"},
					5	: { colorCode: "d98416", colorDescription: "Golden Bell"},
					5.5	: { colorCode: "d57b11", colorDescription: "Meteor"},
					6	: { colorCode: "d1730c", colorDescription: "Dark Goldenrod"},
					6.5	: { colorCode: "cd6c08", colorDescription: "Indochine"},
					7	: { colorCode: "c86505", colorDescription: "Alloy Orange"},
					7.5	: { colorCode: "c45e03", colorDescription: "Tawny"},
					8	: { colorCode: "c05801", colorDescription: "Rose of Sharon"},
					8.5	: { colorCode: "bc5200", colorDescription: "Ruddy Brown"},
					9	: { colorCode: "b74d00", colorDescription: "Mahogany"},
					9.5	: { colorCode: "b34800", colorDescription: "Fire"},
					10	: { colorCode: "af4300", colorDescription: "Orange"},
					10.5	: { colorCode: "ab3f00", colorDescription: "Dark Orange"},
					11	: { colorCode: "a73b00", colorDescription: "Chinese Red"},
					11.5	: { colorCode: "a33700", colorDescription: "Quora"},
					12	: { colorCode: "9f3400", colorDescription: "Sangria"},
					12.5	: { colorCode: "9b3000", colorDescription: "Dark Orange-Red"},
					13	: { colorCode: "972d00", colorDescription: "Totem Pole"},
					14	: { colorCode: "8f2800", colorDescription: "Peru Tan"},
					15	: { colorCode: "882300", colorDescription: "Red Beech"},
					16	: { colorCode: "811f00", colorDescription: "Maroon"},
					17	: { colorCode: "7b1b00", colorDescription: "Pueblo"},
					18	: { colorCode: "741800", colorDescription: "Cedar Wood"},
					19	: { colorCode: "6e1500", colorDescription: "Barn Red"},
					20	: { colorCode: "681200", colorDescription: "Rosewood"},
					21	: { colorCode: "631000", colorDescription: "Dark Red"},
					22	: { colorCode: "5e0e00", colorDescription: "Red Oxide"},
					23	: { colorCode: "590c00", colorDescription: "Rustic Red"},
					24	: { colorCode: "540b00", colorDescription: "Burnt Maroon"},
					25	: { colorCode: "500900", colorDescription: "Pheasant Red"},
					26	: { colorCode: "4c0800", colorDescription: "Brown Pod"},
					27	: { colorCode: "480700", colorDescription: "Temptress"},
					28	: { colorCode: "440600", colorDescription: "Dark Sienna"},
					29	: { colorCode: "410500", colorDescription: "Black Bean"},
					30	: { colorCode: "3d0500", colorDescription: "Dark Bronze"},
					31	: { colorCode: "3a0400", colorDescription: "Chocolate"},
					32	: { colorCode: "370400", colorDescription: "Autumn Maple"},
					33	: { colorCode: "340300", colorDescription: "Dark Cabernet"},
					34	: { colorCode: "320300", colorDescription: "Titian Maroon"},
					35	: { colorCode: "2f0200", colorDescription: "Sepia Black"},
					36	: { colorCode: "2d0200", colorDescription: "Dark Gold Wing"},
					37	: { colorCode: "2a0200", colorDescription: "Zinnwaldite Brown"},
					38	: { colorCode: "280100", colorDescription: "Diesel"},
					39	: { colorCode: "260100", colorDescription: "Licorice"},
					40	: { colorCode: "240100", colorDescription: "Black"},
					50	: { colorCode: "160000", colorDescription: "Smoky Black"},
					65	: { colorCode: "0d0000", colorDescription: "Coal Black"},
					80	: { colorCode: "000000", colorDescription: "Moonlight Black"}
				}
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
				console.log("ebc: " + ebc + " - srm: " + (ebc * 0.508));
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
