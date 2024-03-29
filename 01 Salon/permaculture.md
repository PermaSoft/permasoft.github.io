---
title: PermaCulture
layout: default

eleventyNavigation:
  key: PermaCulture
  title: PermaCulture
  parent: salon
  order: 1

---

# PermaCulture

J'ai fait un stage de Permaculture à l'Escargotier d'Yves Joignant.
J'ai beaucoup apprécié de voir la démarche et les raisonnements qui permettent de construire un jardin potager permanent.
Sur cette page vous trouverez ce qui m'intéresse dans la PermaCulture et les liens que j'en fais avec notre métier.
Ceci-dit, il existe une notion de [PermaEntreprise](https://www.permaentreprise.fr/) qui va beaucoup plus loin dans l'application de la philosophie de la PermaCulture à l'entrepreunariat.

## Zoom Out Vs Zoom In

### Zoom In en tête-à-tête sur des sujets communs

Son stage commence avec du concret, des choses proches de nous et termine par des valeurs/principes plus abstraits.
J'ai l'habitude d'utiliser l'approche inverse où je donne une vision globale du projet/produit, des enjeux et je rentre dans les détails ensuite.
Mon approche me permet de voir ce que la nouvelle recrue comprend tout de suite ou non et ainsi de faire connaissance et de lui apporter les bagages métier, technique ou autres qui pourraient lui manquer. +
Elle me permet de voir mon interlocuteur et d'adapter mon discours à chaud, mais...
J'ai utilisé cette approche (zoom in/top down) sur des présentations en conférence (sur les strat de tests), cela marche beaucoup moins bien, car on ne peut pas rattraper quelqu'un dans la foule qui n'a pas saisi un élément du discours.

### Zoom Out pour construire une compréhension commune à plusieurs

L'approche d'Yves (zoom out/bottom up) en allant du détail vers le global permet de donner à tous les bagages nécessaires pour comprendre l'étage du dessus jusqu'à la vue globale en perdant moins de gens, moins souvent.
J'ai utilisé une approche similaire (sur les refacto crud vers hexagone) où je pars d'une architecture habituelle pour présenter chaque nouveauté, une par une jusqu'à une architecture hexagonale.
Le résultat a généré beaucoup de merci et de compliments sur la facilité à suivre, la pédagogie.

Il y aussi un retour d'expérience que l'on partage entre coachs technique/lead tech.
On gagne à utiliser une pratique sans le dire et mettre un nom et des concepts ensuite.
Ainsi, on peut aider un collègue pendant 2 heures plutôt que faire du pair programming.
On peut aussi faire une task force sur un sujet en mob.
On peut exprimer la spec sous forme de TI/TU et résoudre nos problèmes en les exprimant sous forme de tests avant de les résoudre.
Parfois, nos collègues appelleront ça de l'Outside-In, du Test First, du TDD d'eux-mêmes. +
Au lieu de faire une formation théorique puis de les faire pratiquer en exercices (Katas) et enfin de leur faire appliquer une nouvelle pratique dans la complexité d'un projet d'entreprise, on réduit l'effort de transformation en inversant la démarche. +
En appliquant la pratique nous-même devant (démo) et avec eux (mob/ensemble), l'équipe n'a plus besoin d'imaginer le concept, de se projeter.
En commençant par le résultat de cette pratique, l'équipe en voit l'intérêt et la valeur de la pratique.
Les concepts que l'on introduit ensuite expliquent un fonctionnement qu'ils ont déjà vu.

On parle de l'Event Storming et autres ateliers d'intelligence collective qui permettent d'assembler tous les éléments de bas niveau pour construire une vue globale ?
Une fois cette vue globale réaliser, on peut la diffuser de manière homogène, mais aussi la réfléchir, la manipuler...

Bref, je garde cette idée de partir de la maison, cette zone connue, pour ensuite partir à l'aventure de la nouveauté, l'inconnu ou l'invisible.

## Approche holistique de la création de projet

Cette approche est une façon de commencer la construction d'un projet de permaculture.
La construction d'une vision holistique essaye de prendre tous les éléments à notre disposition pour en faire un tout.
Pour réfléchir l'agriculture, on pense souvent _aux agriculteurs_ et à _leurs outils_.
Dans une approche holistique, on va y ajouter _du contexte, ce qui entre et sort du système_, comme la rivière d'à coté, le fumier du centre équestre, les graines, ... +
De plus, la Permaculture est une agriculture permanente basée sur l'observation, l'analyse et le design de ce qui est permanent.
Autrement dit, elle est basée sur les connaissances des anciens.
On ajoutera donc une étude _des traditions_, habitudes et méthodes d'aujourd'hui.

L'étude préalable au démarrage de projet de Permaculture prend donc en compte :

* Les acteurs avec leurs capacités et leurs envies, qu'ils soient fermiers dans le projet ou des voisins du centre équestre
* Les traditions avec leurs habitudes, leurs valeurs, leurs méthodes
* Les sciences ou l'état de l'art et les capacités modernes
* Le contexte où s'insère le projet, donc ses interactions avec le monde extérieur.

Le cycle de la nature se faisant à l'année, cette étude préalable peut prendre un an lorsqu'il n'y a pas d'urgence (comme relancer l'agriculture d'une région après un désastre - guerre, sauterelles, ...).

Il me semble que cette "check list" est un bon point de départ pour construire une équipe, faire de l'architecture et/ou faire de l'architecture socio-technique (construire des équipes qui ressemblent au SI à construire, cf loi de conway, team topologies).

Pour un projet ou un produit, cette check list peut devenir :

* Les acteurs : le sponsor qui finance, les utilisateurs/clients, les équipes de réalisations (PO, BA, DEV, QA, UX, ...), oui, tout ceux qui interagissent avec le système construit ou à construire
* Les traditions : l'ensemble des actions sur le projet (aka : la culture d'entreprise), le savoir-faire actuel
* Les sciences : le craft, lean, agile, mais aussi les technologies (Cloud, CI/CD, ..), voire les opportunités ?
* Le contexte : le marché, suivi de notre stratégie pour s'y positionner

### Horizons de réflexions et Alignement sur la vision

Pour être aligné sur la vision de la Permaculture, ils utilisent un équivalent à 4 étages des horizons de GTD (Getting Things Done) qu'Yves appelle un Mandala Holistique :

1. Éthique
2. Principes
3. Stratégies
4. Techniques

Dans l'éthique, on trouve 3 principes.
Il faut prendre soin de la terre et de tout forme de vie, être utile à TOUS les acteurs et créer de l'abondance pour partager équitablement le surplus.

Du côté des principes, on trouve :

1. Travailler avec la nature, pas contre elle
2. Faire moins d'effort et obtenir un maximum d'effets
3. Le problème est la solution
4. Les seules limites sont l'imagination
5. Tout jardine, autrement dis : tout a un effet sur son environnement
6. Chaque élément du système rempli plusieurs fonctions
7. Chaque fonction du système doit être remplis par plusieurs éléments
8. Ralentir les flux, autrement dis : Stocker et collecter les énergies
9. Emplacements relatifs, autrement dis : les positionnements des éléments sont définis par leurs relations
10. Petits systèmes intensifs
11. Accélérer les successions pour accélérer les évolutions, autrement dis : accélérer les itérations et leurs démos pour raccourcir les délais de décision


La stratégie sera l'application des principes dans un projet/contexte.
C'est là que l'on voit l'art de la Permaculture :
l'art de placer les éléments dans l'espace et dans le temps. +
Si vous aimez la modélisation, chaque élément à une série de besoins plus ou moins importants à différents moments de l'année et ils fournissent une série d'éléments en quantité variable selon les périodes.
J'imagine que l'analyse systémique d'un jardin doit donner une toile bien plus complexe qu'un diagramme de dépendances d'un bon vieux grand projet d'entreprise.

Enfin, les techniques s'occupent d'exécuter au mieux la stratégie.

## Chronologie et gestion des activités

Pour définir la stratégie et les techniques, nous sortons du monde de la réflexion, de l'étude du problème et nous entrons le monde opérationnel, de la définition d'une solution. +
La méthode qui suit est itérative comme un https://fr.wikipedia.org/wiki/Roue_de_Deming#D%C3%A9marche_d'utilisation[P.D.C.A.] sauf qu'il porte sur un projet complet donc un sur un temps plus long.
Cette méthode se nomme OBREDIM :

1. Observation
2. Bordures
3. Ressources
4. Evaluation
5. Design
6. Implémentation
7. Maintenance

Cette première phase d'Observation est une phase d'étude de l'existant, du plus proche au plus éloigné et sans jugement.
C'est le moment de collecter de l'information, d'identifier les bordures, de lister les ressources, ...
On en profite aussi pour s'observer soi-même ainsi que l'ensemble des acteurs du projet.

Ensuite, on identifie les bordures et on liste ce qui rentre et sort du système actuel.
On continue avec la liste des ressources présentes dans le système des plantes, aux animaux en passant par les matériaux, même non recyclables, mais aussi celles qui nous seront utiles et qui ne sont pas encore dans le ssytème.

Tout ce qui précède nous donne une vision statique du système existant et du système à construire.
L'étape d'évaluation consiste à regarder la dynamique de ces ressources et leurs interactions.

Le temps du design est le moment où l'on applique l'art du placement dans l'espace et dans le temps.
C'est un moment où l'on garde le mandala holistique et où l'on fusionne les rêves, les besoins et les envies de chacun.

Une fois les décisions prises, viens le temps de l'action, de l'implémentation dans le terrain.
Finalement, une fois construit votre nouveau système, il faut le maintenir et l'observer pour l'ajuster aux besoins initiaux ou aux nouveaux besoins et envies.

## Template de placement

Dernier élément qui m'a plus dans ce week-end d'introduction à la Permaculture, c'est le zonage, une façon de ranger les choses.
La zone 0 est son propre habitat, où l'on est. +
La zone 1 est la zone quotidienne, où l'on passe tous les jours.
On y trouve les herbes aromatiques, le potager. +
La zone 2 est la zone hebdomadaire où l'on passe une à deux fois par semaines.
On y trouve les arbres greffés. +
La zone 3 est moins fréquenté et est dédiée aux grands arbres, aux ruches. +
La zone 4 est peu fréquenté assez sauvage où l'on fait de la cueillette.
La zone 5 est inexploitée et permet d'observer la nature sans intervention humaine.

On y voit un critère de rangement par fréquentation naturelle.
On retrouve ce type de raisonnement d'optimisation du ratio effort/effet dans les cartographies de Wardley et dans la https://medium.com/nick-tune-tech-strategy-blog/visualising-sociotechnical-architecture-with-ddd-and-team-topologies-48c6be036c40[matrice de capacités métiers versus la complexité métier].

