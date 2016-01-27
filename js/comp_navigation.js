new Vue({
	el: '#main_nav',
	data: {
		navigation: [
			{
				href: '/', 
				name: 'Home'
			},
			{
				href: '/beertestcrud/', 
				name: 'Beer test-CRUD'
			}
		]
	},
	computed: {
		activePage: function() {
			return window.location.href.split('/')[3];
		}
	}
})