
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
Ces tests sont optimisés pour valider un maximum de criètres fonctionnels ou non en un minimum de scenarios.
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

Comme le [disait Djikstra](https://en.wikiquote.org/wiki/Edsger_W._Dijkstra), tester un programme montre la présence d'un bug, pas son absence.
De mon point de vue, les tests doivent prouver l'existence de fonctionnalités attendues et non l'absence de bugs.
Toujours de mon point de vue, les tests automatisés de développeurs doivent être des tests de fonctionnalités pour être utiles.
Ils doivent décrire et documenter une transformation de données, un transformation d'entrées en sorties d'un point de vue métier.

## Tests unitaires, d'intégrations ET fonctionnels 

### niveaux d'abstractions dans le tests
Mike Cohn

Si vous visualisez la pyramide de Mike Cohn, elle décrit des tests de workflow en pointe, des tests de règles de gestions en bas et qu'il y a une catégorie de tests utiles au milieu  qui sont des tests de services, d'APIs.
Les tests de workflow sont lents, demandent beaucoup de données pour exécuter le workflow complet, donc elles sont sensibles à chaque évolution à moins de se limiter à des cas nominaux loin des valeurs aux bornes et de savoir nettoyer les systèmes persistants.
[CF choose the right abstractions for your tests]

### niveaux de détails adaptés au niveau d'abstraction
Ces tests d'APIs vérifient une étape dans un workflow utilisateurs, ils valident un cas d'usage.
On peut démarrer le test par un appel HTTP, ou appeler directement l'implémentation de l'API ou en encore appeler le service métier directement (le port d'une architecture hexagonale).
Le test exécute du code métier de son point d'appel jusqu'à un retour.
Ce retour aussi peut se faire à plusieurs endroits :
- Depuis une base de données de tests avec les problèmes de persistance et de nettoyage que cela implique 
- Depuis une base de données en mémoire 
- Depuis l'appel à la couche d'accès aux données à la sortie du code métier (l'adaptateur d'une architecture hexagonale).

[...]
Enfin, ce sont des règles de gestions lorsque l'on teste les méthodes métiers des objets du modèle métier ou du domaine ou plus souvent les méthodes procédurale des services métiers seules.

## Tests après, tests avant, tests moteurs (mais pas pilotes!)
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
## Le retour sur investissement dans les tests qualités
~~Cette stratégie de tests se dimensionne et se finance par la gestion de risque.
Le risque qu'un critère soit absent va dimensionner les efforts de tests que vous pouvez faire pour vous en protéger.
Le ratio entre le coût du risque et le coût de son test est le facteur de retour de retour sur investissement.~~

## Pendant de temps là du coté du front
Le front est un code vitrine, sa demie vie est bien plus courte qu'un back.
De nos jours, les front sont plus évolués, long termes et complexe qu'un simple affichage de données.
Le front contient de la logique, des algorithmes.
Ces bouts de code peuvent avoir besoin des retours sur investissements apportés par les tests fonctionnels décris pour le back pour une durée longue mais plus courte que le back. 
La longévité de certains front est, dans mes sentiments, suffisante pour que les tests documentant et protégeant des algorithmes soient rentables.
Vous pouvez être certain que sans tests documentant, vous essaieraient de comprendre ces algorithmes front en vous disant, que ce sont des choix "historiques" en ayant oublié les motivations d'origine.


