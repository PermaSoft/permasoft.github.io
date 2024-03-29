
La méthodologie XP de Kent Beck défini cette mécanique de métaphore comme le décrit [Will Wake sur son site xp123](https://xp123.com/articles/the-system-metaphor/). 
Les anciennes métaphores connues sont le bureau, les fenêtres de Windows, la souris, etc...
Les métaphores étaient une façon d'imaginer la solution a mettre en place, une façon d'explorer les solutions possibles.
Cette pratique a été mise de coté car [[01 Salon/La métaphore du développeur n'est pas la bonne|les métaphores ont des limites de validité/pertinence]] et sont finalement peu alignées avec la solution à mettre en œuvre.

Le besoin de décrire le fonctionnel reste, au moins dans les applications de gestion d'entreprise qu'on appelle souvent des applications "métier".
Les jeux vidéo, les systèmes embarqué et IA sont dans des schéma, à priori, différents que je ne connais pas.
Les applications métiers ont en commun de remplacer un ensemble d'activités logiques que des acteurs naturels, des humains faisaient.
Victimes de leurs succès, ces applications en font de plus en plus.
Ces application peuvent être vues comme des acteurs artificiels qui sont promu avec plus de responsabilités et plus d'activités.

Chaque entreprise reçoit des demandes ou de la matière première et fourni un service ou un produit grâce a ses employés, ses machines et ses logiciels.
Ainsi, la chaîne de valeur qui va transformer la demande en service est composée d'acteurs naturels, d'outils et d'acteurs artificiels.
Dans cette chaîne, on trouve donc des fiches de postes qui rassemblent plusieurs activités distinctes et qui sont exécutées par des applications...
Quand l'activité change, les employés sont formés aux nouveautés, les applications sont mises à jours.

Les applications implémentent une métaphore des process que les humains feraient.
Je suis convaincu que les collègues de ses applications et leurs managers sont capables d'exprimer les process que l'application doit réaliser.
Cette expression est une modélisation du métier de l'application, que l'on nomme aussi une modélisation du domaine.
Autant passer d'un modèle papier à une expression formelle et exhaustive est une compétence d'ingénieur, autant la modélisation métier devrait toujours se faire depuis le modèle déjà en place dans l'application.

Toutes les applications complexes qui fonctionnent sont des applications simples qui se sont enrichies dans le temps. 
Soit vos nouveaux besoins ignorent le passé et demande l'ajout de fonctionnalité que l'on entasse pour obtenir un logiciel qui grossit pour devenir un [[01 Salon/Obesiciel|obésisiciel]] inmaintenable, soit les nouveaux besoins prennent en compte et font évoluer les fonctionnalités existantes et le logiciel grandit.
Vous imaginez un acteur humain qui ne fait qu'ajouter des étapes a ses process sans jamais adapter ou remplacer des étapes existantes ?
Pourtant, c'est ce que l'on fait à chaque fois que l'on exprime une demande d'évolution en ignorant les fonctionnalités existantes.

Les développeurs ont des techniques de modélisation techniques depuis longtemps.
Les techniques de modélisation métiers sont plus récente et se trouvent derrière les termes "[Domain Driven Design](https://github.com/ddd-crew/welcome-to-ddd)" et de ses pratiques de "[knowledge crunching](https://github.com/ddd-crew/welcome-to-ddd)". 
Les équipes produits ne pourront pas définir de produits fins ou complexes ET maintenables sans ses outils ou de meilleurs (à inventer).

Pour ce qui est de la prise en compte de l'existant, je crains que la seule option viable est de demander aux ingénieurs de modéliser l'existant pour que les métiers puissent modéliser leurs évolutions à partir de cet existant.
