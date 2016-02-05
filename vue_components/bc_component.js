module.exports = function() {
	this.optionValues = function() {
		var obj = {};
		for (var option in this.options) {
			obj[option] = {};
			obj[option].value = '';
		}
		return obj;
	}
	this.options = {},
	this.Option = function(obj) {
		obj = obj || {};
		return {
			name: obj.name || '',
			id: obj.id || '',
			type: obj.type || 'String',
			value: obj.value || ''
		}
	}
}