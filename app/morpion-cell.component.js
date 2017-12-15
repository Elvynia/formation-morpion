angular.module('Morpion')
	.component('morpionCell', {
		templateUrl: 'morpion-cell.template.html',
		bindings: {
			'index': '@',
			'currentPlayer': '<',
			'onMove': '&'
		},
		controller: function() {
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
			ctrl.$onChanges = (changes) => {
				if (changes.currentPlayer.currentValue === ''
					&& changes.currentPlayer.previousValue) {
					ctrl.reset();
				}
			};
		}
	});