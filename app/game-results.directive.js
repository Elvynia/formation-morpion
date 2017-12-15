angular.module('Morpion').directive('gameResults', function() {
	return {
		restrict: 'E',
		scope: {
			'status': '=',
			'results': '='
		},
		templateUrl: 'game-results.template.html'
	};
});