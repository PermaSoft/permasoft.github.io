# Obésiciel, le destin naturel des logiciels à succès

Le périmètre fonctionnel augmente en début de projet, puis il se transforme.
Les nouveautés ne s'ajoutent plus, elle remplace une partie de l'existant.
Pourtant, la base de code continue d'augmenter... 
Dans le monde Java, il est difficile d'avoir une base de 200'000 lignes de code bien rangée.
À 400'000 lignes, cela devient a priori impossible. (Ces chiffres n'ont pas de sources) 

Lorsque le code devient trop complexe à maintenir, c'est souvent due à l'historique des fonctionnalités que l'on a ajoutées.
Petit à petit, les procédures implémentant les règles de gestions deviennent pleine de flux d'exécutions imbriqués et sans cohérence apparente.
On appelle cela du code spaghettis, du code dont on ne maitrise plus les flux d'exécutions possibles. 

La productivité diminue, les fréquences d'anomalies et incidents augmentent, la confiance des développeurs chute.
La profitabilité et la pertinence de votre solution logicielle baissent. 

Le logiciel est souvent devenu trop gros pour être réécrit d'un coup en incluant les nouvelles fonctionnalités.
De toute façon, déployer un logiciel aussi imposant, avec autant de fonctionnalités d'un coup serais un trop gros risque opérationnel. 
Les obésiciel ont ce syndrome détestable : "Too big too fail".


Je connais trois grands types de solutions a ce problème :

1. Se placer en fin de procédure et ajouter une condition (un 'if' et son bloc de code) pour notre cas particulier et y implémenter notre story.
Cela génère un code qui contient des séries de blocs, story après story, mois après mois, année après année, les uns à la suite des autres, le code sédimente ! 
Il faudra beaucoup de raffinement pour comprendre l'état final de la donnée.
2. Changer le style de programmation procédural qui est le plus efficace sur du code de saisie de données ou avec de rares règles de gestion vers un style de programmation orienté objet. +
La cible ressemblera à [une architecture hexagonale](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/), mais cela commencera par des méthodes métiers extraites, puis des cas d'usages ([bubble contexts et ACLs](https://www.domainlanguage.com/wp-content/uploads/2016/04/GettingStartedWithDDDWhenSurroundedByLegacySystemsV1.pdf)), puis des sous périmètres fonctionnels ([Strangler pattern](https://martinfowler.com/bliki/StranglerFigApplication.html)) jusqu'à ce que le code redevienne maintenable là où il change à cause du métier et supportable là où il n'a pas besoin de changer.
3. Ne pas avoir le problème !
C'est le secret qui fait le succès des micro-services, lorsque le logiciel dépasse la capacité d'une équipe, il faut trouver n'importe quel critère intelligent pour réduire sa taille, y compris le couper en deux domaines métiers autonomes pour les assigner à deux équipes de développement. Pour ce découpage, on peut séparer un service métier (relation client) ou technique (génération de PDF) sous forme de service managé ou utiliser une Vision Produit et une roadmap pour transformer un flux de travail en deux avec le minimum d'interdépendance possible.

Il existe aussi la gestion d'obsolescence qui réduit la taille d'un logiciel, mais il est déclenché par le souhait de décommissionner une ancienne fonctionnalité ou monter un outil de version et non par la taille grossissante du logiciel.

