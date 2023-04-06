
Une stratégie de tests est une expression de testeurs, du métier des QA (Quality Assurance).
Dans leur métier, cela décrit les moyens de choisir les tests du cahier de tests que l'on va exécuter lors des campagnes de tests. 
Le cahier de tests contient tous les tests existants pour un système en cumulant ceux de toutes les anciennes versions (les tests de non régressions) et ceux de la nouvelle version du systèmes.
Hors, les systèmes ayant du succès, il y a trop de tests manuels pour tous les repasser à chaque livraison de version. 
La stratégie de tests inclus alors le choix de rejouer des chemins critiques, les nouveaux tests sur les évolutions et les test de fonctionnalités connexes qui ont un risque de régression.

Dans les équipes projets (tous les acteurs d'un projet dans une salle), fonctionnelles (feature teams), stream aligned (flow), value stream (unfix), bref multi-disciplinaires, la stratégie de test ne se limite plus aux tests manuels de non régression.
Dans ces équipes, la stratégie de tests peut avoir un ou deux objets différents parmis : 
1. la politique des campagne de tests pour valider des critères de qualités contractuels (perf, sécu, A11y, ...)
2. la discipline de réalisation de tests (fonctionnels) automatisés au quotidien

# La stratégie de tests qualité

La stratégie d'entreprise implique une stratégie produit qui à son tour implique une stratégie de tests.
Une "stratégie" d'entreprise est un choix délibéré de faire quelque chose en renonçant au reste.
Cela consiste généralement à trouver une direction qui nous différentie des concurrents et, dans l'idéal, qui sera difficile à copier.
La stratégie produit est bien plus large qu'un besoin de tests.
Mais en ce qui nous concerne, cette stratégie peut impliquer une garantie en terme de conformité à la loi (RGPD), de performances (vis à vis de la concurrence), de scalabilité, de disponibilité, ...
Elle  se concentre souvent sur les propriétés émergeantes que le logiciel montre au fur et à mesure qu'on le construit.
Ses propriétes étant souvant
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


