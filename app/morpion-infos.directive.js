angular.module('Morpion').directive('morpionInfos', function() {
	return {
		restrict: 'A',
		scope: {
			'currentPlayer': '=morpionInfos'
		},
		templateUrl: 'morpion-infos.template.html'
	};
});