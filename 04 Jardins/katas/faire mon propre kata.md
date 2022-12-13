# Je veux faire mon propre Kata

Il y a plein de bonnes raison, notamment deux :
	- Il y a une problématique que je veux travailler avec mon équipe ou faire travailler par des pairs en meetup/atelier/conférence
	- Nous avons un problème dans notre base de code, mais on arrive pas à s'en sortir
	- (Bonus) Je n'en ai pas trouvé qui représente le problème que je veux adresser !

## Création de Kata blanc
La première famille de raisons consistent à créer un Kata depuis une feuille blanche.
Tu as un truc en tête, un problème ou une solution, souvent un problème de design.
Code-le, implémente le minimum de contexte pour que des relecteurs constatent la même chose que toi.
Ensuite remonte le temps.<br/>
Qu'est-ce qui aurait bien pu te pousser à écrire ce code ?
C'est une réponse à quel problème ?
Il va falloir de l'inspiration et *plusieurs essais* pour passer d'un design pattern au langage générique à un cas concret au langage métier.
De chaîne de responsabilité à filtres de requêtes HTTP programmables et composables.
D'Abstract Factory à thème graphique.
De Feature Envy Vs Modèle métier à moteur de remise de prix en procédural Vs Object ...

Vos premières idées risquent d'être résolu sans avoir besoin de votre solution.
Il vous faudra probablement plusieurs essais pour passer d'une solution à un problème qui amène vers votre solution.
Ceci dis, avoir plus solutions valides et différentes permet de pouvoir les comparer et ce n'est pas si mal.

Le [kata rental movie](https://codingdojo.org/kata/movie-rental/) ressemble à ce genre de kata.

## Création de Kata brun

La deuxième famille de raisons est celle inspirée de problèmes d'un projet réel (professionnel ou personnel).
Dans ce contexte, la base du travail sera de retirer tout ce qui n'est pas lié au problème, puis de le simplifier au maximum sans simplifier le problème à résoudre !
Une dernière étape est d'annonimiser le code en changeant les espace de nommage/package/dossier, mais aussi les noms de type.

Le [kata Gilded Rose](https://codingdojo.org/kata/gilded-rose/) ressemble à ce genre de katas.
Le Gilded Rose propose de travailler une foret de ifs.
Le modèle de données est simplifier à trois champs.
Ils servent en lecture dans les if et en lecture écriture pour modifier deux champs.
Cela a aussi beaucoup simplifié les blocs de code dans les ifs et dans les elses.

