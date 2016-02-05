new Vue({
	el: '#main_nav',
	data: {
		navigation: [
			{
				href: '/', 
				name: 'Home'
			},
			{
				href: '/crud/', 
				name: 'CRUD'
			}
		]
	},
	computed: {
		activePage: function() {
			return window.location.href.split('/')[3];
		}
	}
})