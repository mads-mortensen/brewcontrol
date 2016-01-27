/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	$(function() {
		vue.getAllBeers();
	});

	// Vue
	vue = new Vue({
		el: 'body',
		data: {
			beers: [],
			beer_headers: [],
			beer_headers_ignore: ['_id', '__v'],
			Beer: Beer
		},
		computed: {
			isThisPage: function(path) {
				return true;
			}
		},
		methods: {
			getAllBeers: function() {
				self = this;
				$.ajax({
					dataType: "json",
					url: '/beers/',
					success: function(data, error) {
						// TODO: validate
						self.beers.length = 0;
						if (error == "success") {
							$(data).each(function(i, el) {
								self.beers.push(new self.Beer(el));
							});
							self.setBeerHeaders();
						}
						else {
							// TODO
						}
					},
					timeout: 2000
				}).fail(function(xhr, status) {
					if(status == "timeout") {
						console.error("timed out to API endpoint '/beers/'");
					}
				});
			},
			createNewBeer: function() {
				var new_beer = new this.Beer({name: 'new beer'});
				new_beer.save(false, this.getAllBeers);
			},
			setBeerHeaders: function() {
				this.beer_headers.length = 0;
				if (this.beers.length > 0) {
					for (name in this.beers[0].data) {
						if (this.beer_headers_ignore.indexOf(name) == -1) this.beer_headers.push(name);
					}
				}
			}
		}
	});

	// TODO: make modular, maybe just require('/Beer.js')
	function Beer(data) {
		var self = this;
		this.data = (!data) ? false : data;
		this.save = function(event, callback) {
			$.ajax({
				method: 'PUT',
				url: '/beers/',
				data: self.data
			}).done(function(beer) {
				// TODO: validation
				console.log("saved beer", beer);
				if (beer) self.data = beer;
				if (callback) callback();
			});
		}
		this.delete = function(event, callback) {
			$.ajax({
				method: 'DELETE',
				url: '/beers/',
				data: self.data
			}).done(function(success) {
				// TODO: validation
				if (success) {
					self.data = false;
					if (callback) callback();
				}
			});
		}
	}


/***/ }
/******/ ]);