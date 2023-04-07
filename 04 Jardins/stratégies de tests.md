
Une stratégie de tests est une expression de testeurs, du métier des QA (Quality Assurance).
Dans leur métier, cela décrit les moyens de choisir les tests du cahier de tests que l'on va exécuter lors des campagnes de tests. 
Le cahier de tests contient tous les tests existants pour un système en cumulant ceux de toutes les anciennes versions (les tests de non régressions) et ceux de la nouvelle version du systèmes.
Hors, les systèmes ayant du succès, il y a trop de tests manuels pour tous les repasser à chaque livraison de version. 
La stratégie de tests inclus alors le choix de rejouer des chemins critiques, les nouveaux tests sur les évolutions et les test de fonctionnalités connexes qui ont un risque de régression.

Dans les équipes projets (tous les acteurs d'un projet dans une salle), fonctionnelles (feature teams), stream aligned (flow), value stream (unfix), bref multi-disciplinaires, la stratégie de test ne se limite plus aux tests manuels de non régression.
Dans ces équipes, la stratégie de tests peut avoir un ou deux objets différents parmis : 
1. la politique des campagne de tests pour valider des critères de qualités contractuels (perf, sécu, A11y, ...)
2. la discipline de réalisation de tests (fonctionnels) automatisés au quotidien

Nous allons séparer les tests de testeurs qui sont des tests manuels ou des tests manuels automatisés et les tests de développeurs qui sont nativement automatiques.

Les tests de testeurs testent le système de l'extérieur et le système y est une boite noire.
Ces tests sont adaptés a la validation de critères de qualité externe comme la performance, la tolérance aux pannes, ...
Ils ont un problème de persistance de données qui implique un nettoyage entre chaque scénario.
Ces tests sont optimisés pour valider un maximum de criètres fonctionnels ou non en un minimum de scenarios.
Cela les rends très fragiles lorsque le fonctionnel change en début de workflow, il n'est pas rare de voir de scenarios en échec.
En restant manuels, le testeur peux mettre le scénario à jour en même temps qu'il le joue.
Ces tests passent massivement en échec lorsqu'ils sont automatisé, les toutes les fins de workflow doivent être corrigées.
En conclusion, les Tests QA sont adaptés a la vérification de critères de qualité exterieurs aux systèmes et stables.

Les tests de développeurs peuvent appeler le code de production depuis l'extérieur en réalisant une requête HTTP, directement sur la fonction qui implémente la règle de gestion ou encore n'importe où entre les deux.
Ces tests sont adapté à une vérification chirurgicales des comportement attendus du logiciel, ses cas d'usage et ses règles de gestions.



# La stratégie de tests qualité

La stratégie d'entreprise implique une stratégie produit qui à son tour implique une stratégie de tests.
Une "stratégie" d'entreprise est un choix délibéré de faire quelque chose en renonçant au reste.
Cela consiste généralement à trouver une direction qui nous différentie des concurrents et, dans l'idéal, qui sera difficile à copier.
La stratégie produit est bien plus large qu'un besoin de tests.
Mais en ce qui nous concerne, cette stratégie peut impliquer une garantie en terme de conformité à la loi (RGPD), de performances (vis à vis de la concurrence), de scalabilité, de disponibilité, ...
Elle  se concentre souvent sur les propriétés émergeantes que le logiciel montre au fur et à mesure qu'on le construit.
Ses propriétes étant souvant l'expérience utilisateur, la performance, la sécurité, etc.

Cette stratégie de tests se dimensionne et se finance par la gestion de risque.
Le risque qu'un critère soit absent va dimensionner les efforts que vous pouvez faire pour vous en protéger.
Dans l'aviation, on plie des ailes jusqu'à leur rupture, on envoie des poulets congelés dans des réacteurs tout neuf pour ne jamais avoir un accident d'avion.
Les coûts de tests dans l'aviation sont faramineux pour réduire le taux d'échec à zéro avant le décollage.
A l'opposé, les fasts foods ne vérifient pas ou peu les commandes qu'ils fournissent en salle. 
Quand le client constate un problème, les équipes fournissent le produit manquant avec des excuses et un grand sourire : corriger en prod à posteriori leur coûte moins d'effort que de vérifier correctement chaque commande.
Le coût du risque se calcule avec une estimation du coût de l'incident lorsqu'il se produit multiplié par la probabilité que se critère se produise.
Le coût de l'incident inclut la perte de fonctionnalité pour l'utilisateur, les pénalités contractuelles, la perte de confiance,  l'analyse par le support et autres équipes, la réalisation d'un correctif, son déploiement en production et finalement la désorganisation et le retard pris par les opérationnels à cause de cet incident.

Chaque équipe doit donc voir quelle sont les critères de qualité logicielle (ou de qualité de l'infrastructure) demandés par la stratégie produit et les engagements contractuels.
A ce moment, vous n'en aurez que la moitié car il vous manquera des critères de qualité implicite (fautes d'orthographes, fonctionnel fiables, sans perte de données, ...).

A partir de ces critères de qualité, vous pouvez évaluer le coût du risque ou la gène que poserait leur absence.
C'est ce coût du risque qui financera les effort de tests comme des plans de reprise après incident, des tirs de performance, de tenue de charge, de résillience, etc.


# La stratégie de tests fonctionnels

Beaucoup d'équipes parlent de stratégie de tests pour décrire les attentes en tests automatisés implémentés par les développeurs comme si cette activité de tests automatisés était séparables de l'activité de développement.
Et pourtant, c'est activité font partie de la Définition of Done (Dod) et des estimations pour réaliser une tâche.



Comme le disait Djikstra, les tests prouvent la présence d'un bug, pas son absence.
De mon point de vue, les tests doivent prouver l'existence de fonctionnalités attendues et non l'absence de bugs.
Ces tests automatisés de développeurs doivent être des tests de fonctionnalités pour être utiles.


Ces fonctionnalités sont des workflows utilisateurs sur des tests de bout en bout.
Ce sont des cas d'usages sur des test qui commencent du point d'entrée (REST) ou du service métier qui implémente ce d'usage et qui terminent soit à la persistance de tests (souvent en mémoire) soit au mocks de votre couche d'accès aux données.
Enfin, ce sont des règles de gestions lorsque l'on teste les méthodes métiers des objets du modèle métier ou du domaine ou plus souvent les méthodes procédurale des services métiers seules.

Pyiramide de tests de Mike Cohn

Bref, ces tests de développeur se font au quotidien, en même temps que le code de prod qu'ils testent (avant, en fait).
Selon la méthode (test first ou non), la discipline (TDD) et méthode (BDDD) pour les concevoir, ils peuvent contribuer à certains critères de qualité logicielle.
- Le test après avoir écris le code fournit une preuve technique qu'une caractéristique existe.
	- C'est un plus pour la fiabilité car on capture et valide le comportement du code de production.
- Le test écris avant le code de production fournit un preuve qu'une fonctionnalité existe.
	- C'est un plus pour la fiabilité et la maintenabilité car on conçoit le test à partir d'un objectif, une spécification, un exemple, un critère d'acceptance.
- Le test nommé sous forme de fonctionnalité ou de détail fonctionnel valide quelque soit les "bonnes" valeurs utilisées dans le test
	- Ce ajoute à la maintenabilité, et la productivité à long terme grâce à sa valeur documentaire et son couplage au code (tant que ca compile et que ca passe au vert, cette spécification exécutable par l'exemple est à jour).
- Le test écris en suivant la discipline TDD fourni une exhaustivité des tests sur le fonctionnel existant(y compris quand on supprime des tests lors d'étapes intermédiaires).
	- 

