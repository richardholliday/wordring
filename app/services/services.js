'use strict';

/* Services */


app.service('wordService', function() {
	this.getWords = function () {
		return words;
	}

	var words = [
		'nez',
		'langue',
		'main',
		'bouche',
		'droite',
		'doigt',
		'personne',
		'yeux',
		'oreille',
		'visage',
		'viens',
		'gauche'
	];


});