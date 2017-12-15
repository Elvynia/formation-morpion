angular.module('Morpion')
	.controller('MorpionController', function() {
		this.playing = false;
		this.results = false;
		this.isDraw = false;
		this.winner;
		this.start = () => {
			this.playing = true;
			this.results = false;
		};
		this.doStop = (status) => {
			this.results = true;
			this.isDraw = status.isDraw;
			this.winner = status.winner;
			this.playing = false;
		};
	});