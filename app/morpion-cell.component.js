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
			ctrl.$doCheck = function() {

			};
			ctrl.$onChanges = function(changes) {
				// console.log(changes);
				console.log('prev:%s, cur:%s, isFirst:%s',
					changes.currentPlayer.previousValue,
					changes.currentPlayer.currentValue,
					changes.currentPlayer.isFirstChange()
					);
			}
			ctrl.play = () => {
				if (!ctrl.played) {
					ctrl.played = true;
					ctrl.playerClass = ctrl.currentPlayer;
					console.log('morpion-cell:%s', ctrl.currentPlayer);
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