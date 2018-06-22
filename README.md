# Projet Hyperpion !
Application Web avec le jeu du morpion (version Jquery, AngularJS, Angular5)

# Conception
## Partie 1
Mise en place de la structure

## Partie 2
Implémentation des fonctions du jeu :

* Fonction d'initialisation du morpion : initialize() -> void
  - Utiliser la fonction 'querySelector' de l'API du DOM pour sélectionner uniquement les éléments 'td' à l'intérieur de la 'table' du morpion (classe CSS morpion) et obtenir un tableau (variable 'cells')
  - Utiliser la fonction forEach sur 'cells' et pour chaque élément
    - Ajouter le listener 'play' sur l'événement 'click'
* Fonction de vérification : checkVictory() -> Le joueur gagnant ou null
  - Déclarer une variable 'won'
  - Pour chaque cas de victoire (ligne, colonne, diagonale), assigner le className (valeur dans data) si le cas est gagnant et tant que 'won' est null
  - Renvoyer le joueur correspondant au className de 'won' ou null
* Fonction à utiliser en réponse à un clic sur une case du morpion : play(event) -> void
  - Trouver la case cliquée dans l'événement (variable 'cell')
  - Identifier le joueur courant en fonction du nombre de tours et du tableau des joueurs
  - Créer un élément HTML (variable 'token'). Lui attribuer la classe CSS correspondant au joueur courant
  - Ajouter 'token' à 'cell'
  - Remplir la bonne cellule de Game.data avec le className du joueur
  - Récupérer le résultat de checkVictory (variable 'result')
  - Si result est un joueur ou que le nombre de tours est strictement égal à 9
    - Appeler la fonction stopGame avec 'result' en argument
  - Sinon
    - Incrémenter le nombre de tours
    - Retirer le listener sur l'événement click de 'cell'
* Fonction d'arrêt du jeu lorsque la partie est terminée : stopGame(winner) -> void
  - Afficher les résultats de la partie à l'utilisateur
    - Si 'winner' n'a pas la valeur 'null'
      - Récupérer le nom du joueur gagnant et afficher sa victoire dans la page
    - Sinon
      - Afficher un match nul
  - Retirer tous les écouteurs de l'événement 'click' de toutes les cases de la grille du morpion
    - Utiliser à nouveau forEach pour parcourir tous les <td> et pour chacun utiliser 'removeEventListener'
