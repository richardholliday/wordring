'use strict';

/* Controllers */


app.controller('WordsController', function ($scope, wordService) {

	init();

	function init() {
		$scope.words = wordService.getWords();
	}

	$scope.getNextWord = function() {
		$scope.nextWord = $scope.words[Math.floor(Math.random()*$scope.words.length)];
	}
});
