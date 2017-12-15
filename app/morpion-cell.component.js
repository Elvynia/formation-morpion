angular.module('Morpion')
	.component('morpionCell', {
		templateUrl: 'morpion-cell.template.html',
		bindings: {
			'index': '@',
			'currentPlayer': '<',
			'onMove': '&'
		},
		controller: function($scope) {
			var ctrl = this;
			ctrl.played = false;
			ctrl.playerClass = '';
			ctrl.play = () => {
				if (!ctrl.played) {
					ctrl.played = true;
					ctrl.playerClass = ctrl.currentPlayer;
					ctrl.onMove({index: ctrl.index});
				} else {
					console.warn('Impossible de jouer ici...');
				}
			};
			ctrl.reset = () => {
				ctrl.playerClass = '';
				ctrl.played = false;
			};
			$scope.$on('morpion-start', ctrl.reset);
		}
	});