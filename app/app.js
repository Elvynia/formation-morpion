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
			// Récupérer chaque td de la table
			let cells = document.querySelectorAll('table.morpion td');
			cells.forEach((cell) => {
				// Associer une fonction play() sur l'événement 'click'.
				cell.addEventListener('click', this.play);
			});
		};
		this.play = function(event) {
			// ATTENTION : cette fonction n'est pas exécutée dans le même contexte que les autres.
			// En effet la fonction play n'est pas appelée par "notre JavaScript" mais par le
			// navigateur lui-même lorsqu'un clic est détécté sur l'élément écouté.
			// Récupération du joueur courant avec le nombre de tours et le tableau de joueurs.
			// L'utilisation de l'opérateur modulo ('%') permet de boucler les indices
			// à l'intérieur du tableau.
			// Exemples :
			// 		turnCount = 0; (turnCount % 2) -> 0
			// 		turnCount = 1; (turnCount % 2) -> 1
			// 		turnCount = 2; (turnCount % 2) -> 0
			// 		turnCount = 3; (turnCount % 2) -> 1
			// 		turnCount = 4; (turnCount % 2) -> 0
			let currentPlayer = hyperpion.players[hyperpion.turnCount % 2];
			// Bonne pratique : récupérer la cible de l'événement par 'target'
			// ou sinon (si target null ou undefined) utiliser currentTarget.
			let clickedCell = event.target || event.currentTarget;
			console.log('Le joueur %s a joué dans la cellule :', currentPlayer.getName(), clickedCell);
			// Ajouter le symbole du joueur dans la cellule et remplir les données métier 'data'.

			// Vérifier si le joueur a gagné la partie

			// Si la partie continue : Incrémenter le nombre de tours, retirer le listener sur 'click'.
			// Bonne pratique dans tous les langages : préférer la pré-incrémentation si possible.
			++hyperpion.turnCount;
		};
		this.checkVictory = function() {
			
		};
		this.stopGame = function(winner) {

		};
	};

	window.hyperpion = new Game();
})();