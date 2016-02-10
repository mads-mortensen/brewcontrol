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
				name: 'Beers'
			}
		]
	},
	computed: {
		activePage: () => window.location.href.split('/')[3]	
	}
})