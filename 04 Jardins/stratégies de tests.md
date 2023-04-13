
# Une légende

Une stratégie de tests est une expression de testeurs, du métier des QA (Quality Assurance). 
Dans leur métier, cela décrit les moyens de choisir les tests du cahier de tests que l'on va exécuter lors des campagnes de tests. 
Le cahier de tests contient tous les tests existants pour un système en cumulant ceux de toutes les anciennes versions (les tests de non régressions) et ceux de la nouvelle version du systèmes.
Hors, les systèmes ayant du succès, il y a trop de tests manuels pour tous les repasser à chaque livraison de version. 
La stratégie de tests inclus alors le choix de rejouer des chemins critiques, les nouveaux tests sur les évolutions et les test de fonctionnalités connexes qui ont un risque de régression.

# Une actualité
Dans les équipes projets (tous les acteurs d'un projet dans une salle), fonctionnelles (feature teams), stream aligned (flow), value stream (unfix), bref multi-disciplinaires, la stratégie de test ne se limite plus aux tests manuels de non régression.
Dans ces équipes, la stratégie de tests peut avoir un ou deux objets différents parmis : 
1. la politique des campagne de tests pour valider des critères de qualités contractuels (perf, sécu, A11y, ...)
2. la discipline de réalisation de tests (fonctionnels) automatisés au quotidien

Nous allons séparer les tests de testeurs qui sont des tests manuels ou des tests manuels automatisés et les tests de développeurs qui sont nativement automatiques.

## Les tests de testeurs
Les tests de testeurs testent le système de l'extérieur et le système y est une boite noire.
Ces tests sont adaptés a la validation de critères de qualité externe comme la performance, la tolérance aux pannes, ...
Ils ont un problème de persistance de données qui implique un nettoyage entre chaque scénario.
Ces tests sont optimisés pour valider un maximum de critères fonctionnels ou non en un minimum de scenarios.
Cela les rends très fragiles lorsque le fonctionnel change en début de workflow, il n'est pas rare de voir de scenarios en échec.
En restant manuels, le testeur peux mettre le scénario à jour en même temps qu'il le joue.
Ces tests passent massivement en échec lorsqu'ils sont automatisé, les toutes les fins de workflow doivent être corrigées.
En conclusion, les tests QA sont adaptés "à la vérification manuelle ou automatisée de critères de qualité extérieurs aux systèmes et stables sur des systèmes vus comme des boites noires".

## Les tests de développeurs
Les tests de développeurs peuvent appeler le code de production depuis l'extérieur en réalisant une requête HTTP ou directement sur la fonction qui implémente la règle de gestion ou encore n'importe où entre les deux.
Ces tests sont adaptés à une vérification chirurgicale des comportements attendus du logiciel, ses cas d'usage et ses règles de gestion.
Il sont réalisé sans le workflow qui précède la règle de gestion à vérifier.
Le test a donc moins de contexte à préparer, et il n'y a souvent pas de persistance à nettoyer.
En conclusion, les tests de développeurs sont adaptés "à la vérification programmée de cas d'usage, de règles de gestions internes à un système vu comme comme une boite blanche".

## Les tests en contexte agile
Il y a des choix à faire sur la propriété et la responsabilité de chaque type de tests.
Entre, les PO/BA, QA et Dev, qui fait quels tests ?
Certains font des RACI, d'autres de simples assignations de postes pour chaque type de tests.
Ok, mais on y rate un truc...
Le cycle de vie d'un test peut traverser les postes.
L'exemple le plus varié est un test de règles de gestion :
- L'expression de besoin est faite par BA
- Les exemples sont proposés soit par le BA, soit par le testeur
- Les exemples sont challengés et mis sous formes de tests ou de critères d'acceptance par tous
- Ces tests sont implémentés par les développeurs (qui les exécutent en local)
- Ces tests sont exécuté et leur 
Sauf que le cycle de vie du test doit être découpé plus fin qu'une seule responsabilité.
Le cycle de vie d'un test commence par une conception

# La stratégie de tests qualité

## La stratégie, c'est de la politique
La stratégie d'entreprise implique une stratégie produit qui à son tour implique une stratégie de tests.
Une "stratégie" d'entreprise est un choix délibéré de faire quelque chose en renonçant au reste.
Cela consiste généralement à trouver une direction qui nous différentie des concurrents et, dans l'idéal, qui sera difficile à copier.
La stratégie produit est bien plus large qu'un besoin de tests.
Mais en ce qui nous concerne, cette stratégie peut impliquer une garantie en terme de conformité à la loi (RGPD), de performances (vis à vis de la concurrence), de scalabilité, de disponibilité, ...
Elle  se concentre souvent sur les propriétés émergeantes que le logiciel montre au fur et à mesure qu'on le construit.
Ses propriétés étant souvent l'expérience utilisateur, la performance, la sécurité, etc.

## Le retour sur investissement dans les tests qualités
Cette stratégie de tests se dimensionne et se finance par la gestion de risque.
Le risque qu'un critère soit absent va dimensionner les efforts de tests que vous pouvez faire pour vous en protéger.
Le ratio entre le coût du risque et le coût de son test est le facteur de retour de retour sur investissement.

### Le coût du risque
Le coût du risque se calcule avec une estimation du coût de l'incident lorsqu'il se produit multiplié par la probabilité que se critère se produise.
Le coût de l'incident inclut la perte de fonctionnalité pour l'utilisateur, les pénalités contractuelles, la perte de confiance,  l'analyse par le support et autres équipes, la réalisation d'un correctif, son déploiement en production et finalement la désorganisation et le retard pris par les opérationnels à cause de cet incident.

### Le coût du test
En face, le coût du test doit être minimal comme en observant la production au lieu de faire des tirs de tests hors productions.
Une définition du test est le fait d'exercer une pression sur un système et de vérifier la conformité du résultat.
Hors, la production exerce une pression plutôt réelle sur le système et le résultat de l'observabilité peut être de lancer des alertes quand le résultat n'est pas conforme.
Il faut vraiment avoir besoin du résultat du test avant la mise en production pour avoir besoin de fabriquer des tests avant cette mise en production.
Quitte a construire et maintenir des tests, vous pouvez essayer de faire en sorte que cet effort apporte plusieurs gains :
- Concevoir un test, c'est l'occasion de mettre l'équipe en accord sur l'objectif à atteindre (cf BDD)
- Maintenir un cahier de test, c'est l'occasion d'avoir une documentation naturellement mise à jour des cas d'usages essentiels (critiques pour le fonctionnel, sensibles pour la sécurité ou les performance)
- Des jeux de données pour des tests rejouables peut faciliter la création de démos ou permettre aux internes (PO, BA, Testeurs, Dev, Sec, Ops, ...) de vérifier des hypothèses à moindre coût.


## La variété de tests de critères qualité
Les testeurs certifiés ISTQB avec sous la partie agile pourront vous en dire long sur le sujet.
Pour notre culture, j'utilise les critère de qualité produit de la norme ISO25010 pour faire ma liste de course en terme de critères de qualité externes.
Le critère de maintenabilité étant un problème de développeurs, je l'adresse dans la partie sur la la stratégie de tests fonctionnels.


A ce moment, vous n'en aurez que la moitié car il vous manquera des critères de qualité implicite (fautes d'orthographes, fonctionnel fiables, sans perte de données, ...).

# La stratégie de tests fonctionnels

## Les tests ne prouvent pas l'absence de bugs, mais la présence d'une fonctionnalité
Comme le [disait Djikstra](https://en.wikiquote.org/wiki/Edsger_W._Dijkstra), tester un programme montre la présence de bugs, pas leur absence.
Il semble y avoir une opinion partagée sur [l'impossibilité de garantir l'absence de bugs](http://wiki.c2.com/?TestsCantProveTheAbsenceOfBugs) ou d'erreurs dans un logiciel complexe.
La démarche proposée étant de garder une solution logicielle aussi simple que possible, se limiter a des solutions qui tiennent dans la tête (j'y entends faire du modulaire), ne rendre que les états valides modélisables et faire des tests pour réduire le risque d'erreurs sans pouvoir garantir leur absence...
D'abord, c'est pas fou comme promesse, ensuite, si on ne teste pas pour garantir l'absence de bugs, mais pourquoi on teste ???

Un test exerce une pression sur un système et on vérifie sa réponse vis à vis d'un attendu.
Un test met en lumière un comportement attendu.
Il prouve l'existence d'une fonctionnalité (ou d'un détail d'une fonctionnalité).
En conclusion, il documente des spécifications par des exemples concrets.

Lorsque les interfaces décrivent ce que fait une fonctionnalité (le quoi : transformer une entrée en sortie), les implémentations en décrivent l'algorithme (le comment).
Les tests qui appellent ce code vont alors décrire comment on se sert de cette fonctionnalité (le pour qui) et le nom du test peut alors définir l'objectif à atteindre (le pourquoi).
Cela me fait penser à une méthode de résolution de problème [QQQOCP](https://fr.wikipedia.org/wiki/QQOQCCP#Pr%C3%A9sentation_sous_forme_de_liste) où le besoin métier serait le problème à résoudre :

question | emplacement de la réponse
-- | --
Qui ? | L'implémentation des tests
Quoi ? | L'interface
Où ? | L'emplacement de l'interface (package, espace de nommage)
Quand ? | Historique et commentaires git
Comment ? | L'implémentation du code de production
Combien ? | Monitoring, logs
Pourquoi ? | Les noms des tests

En ajoutant la légende disant que le code est lu 100 fois plus qu'il n'est écris, on comprend que des tests optimisés pour être relus aideront fortement la maintenance.
Ils sont d'autant plus utiles qu'ils décrivent une transformation de données d'un point de vue métier/produit, une fonctionnalité et pas un détail technique.
Les tests fonctionnels documentent qu'une liste revient triée, mais ne testent pas que c'est un algorithme particulier qui est utilisé (Quick Sort, Bubble Sort, Merge Sort, ...).
Ces tests qui caractérisent un algorithme peuvent être utile pour mettre au point cet algorithme.
Si on ne les garde pas pour leur valeur documentaire, on peut en garder certains pour le soutien qu'ils fournissent à la maintenance de l'algorithme.
Sauf qu'ils figent un détail d'implémentation et qu'il faudra du courage et/ou de la confiance pour supprimer ces tests plus tard.

## Tests unitaires, d'intégrations ET fonctionnels 
Les tests unitaires sont ou peuvent être des tests fonctionnels.
Les tests d'intégrations sont ou peuvent être des tests fonctionnels.
Je prends les termes "tests fonctionnels" comme des tests de fonctionnalités métiers/produit.
Les tests de fonctionnels de testeurs sont des parcours utilisateurs qui passent par plusieurs fonctionnalités pour chaque scénario.
Ce sont des tests qui stimulent le logiciel déployé de puis l'extérieur, souvent avec des systèmes de persistance déployés aussi.
Pour rationnaliser ces tests (réduire le temps d'exécution, le cout de maintenance), les testeurs vont vérifier un maximum de fonctionnalités en un un seul passage.
Ces scénarios de tests sont des séries d'étapes qui décrivent un workflow complet.
On vérifie le résultat de chaque étape.
Les tests fonctionnels de développeurs ne testent qu'une seule étape.
Ils n'appellent que cette étape dans le code de production et ne préparent des données de test que pour cette étape.
Un fichier de tests sur une étape va donc regrouper tous les cas de tests pour cette étape, cette fonctionnalité.
Les tests de développeurs qui appellent des services REST, ou des cas d'usages métier ou encore des règles de gestions ET qui nomment leur tests de manière à documenter le fonctionnel qu'ils sollicitent sont des tests fonctionnels, même si ils ne correspondent pas aux tests fonctionnels de testeurs.

### niveaux d'abstractions

Les tests de développeurs peuvent appeler le code de production depuis plusieurs endroits :
- Depuis l'extérieur avec une requête HTTP, un message entrant, etc.
- Depuis l'entrée du système en appelant l'implémentation du service rest, le consomateur du message, etc.
- Depuis les service métier qui implémentent une unité de cas d'usage
- Depuis le modèle métier (fonctionnel ou objet) implémente une unité de règle de gestion

Ces hauteurs ont été décrites par [Mike Cohn dans une pyramide](https://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid) dont l'idée était d'identifier qu'il n'y avait pas que les tests de workflow et les tests unitaires, il existe aussi des tests de services pour tester une étape seule d'un workflow.
Son étage supérieur correspond aux tests de workflows et autres tests de testeurs, les deux autres étages sont des tests de développeurs.
On se sert souvent de [la forme en pyramide pour expliquer les différences entres niveau de tests](https://martinfowler.com/articles/practical-test-pyramid.html) :
- Il y a beaucoup plus de tests unitaires que de tests de niveaux supérieurs ^982865
- Les TUS sont plus rapides (4 ms moyen, donc 1'000 prennent 4 secondes)
- Les TUs demandent moins de préparation de données
- Les TUs stimulent moins de code de production donc on peut aller dans plus de détails fonctionnels
- Les TUs sont moins sensibles aux évolutions de fonctionnalités connexes car ces autres fonctions ne sont pas exécutées par les TUs.
- Les TUs peuvent tester les cas aux bornes de chaque fonctionnalité sans devenir fragile, ce n'est pas le cas des tests de workflow
- Les TUs sont moins chers a produire, plus stables dans le temps, ne cassent que lorsque la fonctionnalité ciblée doit évoluer, etc.

### niveaux de détails adaptés au niveau d'abstraction

Plus on descend dans la pyramide de tests plus on s'éloigne de l'utilisateur et de son contexte pour se rapprocher d'une règle de gestion.
[Gerard Meszaros décrit que l'on doit choisir un niveau de détail fonctionnel adapté](https://www.infoq.com/presentations/tests-vocabulary/) à la hauteur du tests.
Un test unitaire peut vérifier la combinatoire d'une fonctionnalité, ses cas aux bornes, ses détails.
A l'opposé, un test de workflow traverse beaucoup de fonctionnalité et doit passé au milieu des cas nominaux pour être le plus stable possible malgré les évolutions du produit.

### surface de refactoring
Nous venons de voir que l'on peut choisir la hauteur où nos tests appellent le code de production.
Nous pouvons de la même façon choisir où on s'arrête, en général.
Le contre exemple est sur le test d'une règle métier dans un modèle métier (fonctionnel ou objet) qui ne fait pas d'IO, ses méthodes métier retournent un nouvel état, sans effets de bord, sans dépendance à couper.
Pour les autres tests de cas d'usages ou au-dessus, il y a un enchainement de dépendance qui peut aller jusqu'à un système externe soit déploé, soit mis en mémoire (H2Db, Fongo, etc.).
Si on fait des tests en dessous des méthodes métiers, on peut figer des détails d'implémentation et empêcher de futurs refactorings.
Plus on teste de haut, plus on coupe tard, plus on fige le cas d'usage loin des détails d'implémentations et plus on se permet de pouvoir remettre en cause les algorithmes et plus on a de surface refactorable. 
Plus on a de surface refactorable, plus on exécute du code de production, plus on dépend de fonctionnalités connexe, plus on a de données de tests à préparer, plus le temps d'éxécution est long, etc. Bref, la même liste que [[Stratégies de tests#^982865|celle des TUs dans la pyramide de tests]]

### Le bon test fonctionnel
En conclusion de cette partie les tests fonctionnels automatisés par les développeurs, nous voyons qu'il y a quelques choix à faire sur le point d'entrée du test dans le code de production et sur son point de sortie.
Les tests ont pour rôle premier de documenter le métier (workflow, cas d'usages et règles de gestion) avec des exemples concrets.
L'implémentation du test un exemple concret d'un usage, son nom est une description générique du détail fonctionnel que l'on teste qui reste vrai quelque soit les valeurs concrètes et valides que l'implémentation pourrait avoir.

Il est tentant de commencer par un test de cas d'usage nominale qui tape aussi haut que possible pour documenter un cas d'usage en étant aussi proche que possible d'un point de vue utilisateur ou d'une user story pour montrer que les données sont bien intégrées (stockées et restituées).
Si on peut descendre jusqu'à une persistance en mémoire, on obtient des tests qui figent des fonctionnalités d'un point de vue utilisateur qui ne fige ni les algorithmes métier, ni la persistance.
Et ca n'est pas un monde idéal, malheureusement.
En stimulant plusieurs couches, on doit préparer plus de données de tests, comme les référentiels en base de données qui sont pointées par des clefs étrangères.
En stimulant plus de code, les tests ont des bugs dans des endroits plus variés.
En stimulant plus de couches, il faut lier les dépendances entre elles et avec une persistance en mémoire, il faut souvent démarrer le moteur d'injection de dépendances ce qui ralenti beaucoup le temps d'exécution d'un test.

Une fois un cas d'usage nominal implémenté, le temps d'exécution de ce type de tests et la quantité de données de tests à préparer incite à tester la combinatoire fonctionnelle à des nivaux plus bas.
Plus le coût du test est faible, plus est possible d'essayer des choses pour voir et pour savoir.
Comme la meilleure idée n'est généralement ni la première à venir, ni la plus simple à implémenter, il utile de pouvoir essayer pour le moins cher possible.
Les tests fonctionnels et unitaires testent la combinatoire fonctionnelle, les cas aux bornes ou aux limites, les gestions d'erreurs métiers, etc.
Ils appellent les règles de gestion là où elles sont implémentées.

Les praticiens de TDD décrivent cette approche de [double boucle de feedback](https://coding-is-like-cooking.info/2013/04/outside-in-development-with-double-loop-tdd/) fournie par les deux niveaux de tests.

## Tests après, tests avant, tests moteurs (mais pas pilotes!)

Ces tests de développeur se font au quotidien, en même temps que le code de prod qu'ils testent (avant, en fait).
Selon la méthode (test first ou non), la discipline (TDD) et méthode (BDD) pour les concevoir, ils peuvent contribuer à certains critères de qualité logicielle.
- Le test après avoir écris le code fournit une preuve technique qu'une caractéristique existe.
	- C'est un plus pour la fiabilité car on capture et valide le comportement du code de production.
	- C'est ce que l'on fait du code non testé lorsque l'on veut le refactorer.
- Le test écris avant le code de production fournit un preuve qu'une fonctionnalité existe.
	- C'est un plus pour la fiabilité et la maintenabilité car on conçoit le test à partir d'un objectif, une spécification, un exemple, un critère d'acceptance.
- Le test nommé sous forme de fonctionnalité ou de détail fonctionnel valide quelque soit les "bonnes" valeurs utilisées dans le test
	- Cela ajoute à la maintenabilité, et la productivité à long terme grâce à sa valeur documentaire et son couplage au code (tant que ca compile et que ca passe au vert, cette spécification exécutable par l'exemple est à jour).
- Le test écris en suivant la discipline TDD fourni une exhaustivité des tests sur le fonctionnel existant(y compris quand on supprime des tests lors d'étapes intermédiaires).
	- 

## Pendant de temps là du coté du front
Le front est un code vitrine, sa demie vie est bien plus courte qu'un back.
De nos jours, les front sont plus évolués, long termes et complexe qu'un simple affichage de données.
Le front contient de la logique, des algorithmes.
Ces bouts de code peuvent avoir besoin des retours sur investissements apportés par les tests fonctionnels décris pour le back pour une durée longue mais plus courte que le back. 
La longévité de certains front est, dans mes sentiments, suffisante pour que les tests documentant et protégeant des algorithmes soient rentables.
Vous pouvez être certain que sans tests documentant, vous essaieraient de comprendre ces algorithmes front en vous disant, que ce sont des choix "historiques" en ayant oublié les motivations d'origine.

## Le retour sur investissement dans les tests fonctionnels
Le gain des tests : une doc par l'exemple
Le coût du tests : selon la hauteur de tests, l'espace refactorable.
Les risques couvert : maintenance (instabilité, incompréhensions/régressions, ajout/remplacement)
Le coût du risque de non maintenance : baisse de productivité (de + en + de retravail), de réputation, de pertinence, de suivi des évolutions du marché.

La qualité logicielle se mesure en :
- Nombre de fois où on se demande pourquoi ces quelques lignes de code existent
- Nombre de WTF par minutes lors d'une revue de code, 
- Simplicité de la structure.


