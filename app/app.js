// Utilisation d'une IIFE (Immediately invoked function expression).
(function() {
	// L'objet console permet de sortir des logs et des informations
	// détaillée sur les objets du DOM.
	console.log('Démarrage du Morpion !');

	let Player = function(username, className) {
		this.username = username;
		this.className = className;
		this.index = null;
		this.getName = function() {
			return this.username;
		};
	};

	let Game = function() {
		this.turnCount = 0;
		this.players = [
			new Player('Joueur 1', 'circle'),
			new Player('Joueur 2', 'cross')
		];
		this.data = [
			[], [], []
		];
		this.playing = false;
		this.initialize = function() {
			// Récupérer chaque td de la table et associer
			// une fonction play() sur l'événement 'click'.
		};
	};

	window.hyperpion = new Game();
})();