
Le refactoring, c'est le changement de la structure du code sans en changer les fonctionnalités.
Ce changement de structure permet d'améliorer un design qui était adapté à un ancien contexte pour le rendre adapté à un nouveau contexte.
Les temps changent, les demandes clients et les librairies sur lesquelles ont s'appuient aussi.

Il existe plusieurs hauteurs pour un refactoring :
- le fil de l'eau (au quotidien) où l'on adapte notre algorithme à la nouvelle fonctionnalité en cours de développement : la 3e étape en TDD, la moitié de votre dev sans test first.
- le chantier où l'on s'adapte à un nouveau contexte sans remettre l'existant en cause (mise à jour de librairies et frameworks, virage dans la roadmap, nouveaux types de demandes clients)
- la refonte où l'on change de stack ou d'architecture logicielle

Il y a un tronc commun dans tous ces refactorings:
1. on détecte un problème : code smell, code fragile (générateur de bugs à chaque évolution), baisse de productivité sur certaines zones, fin de support sur la stack
2. On le finance...
3. on capture le fonctionnement actuel : tests unitaires, tests d'intégrations par assertions ou par approbations, double run
4. On se décide sur une conception cible à atteindre, et on "refactore"
5. On vérifie que l'on a rien cassé

# Les refactoring du quotidien

## Détection

Lorsque l'on ajoute une nouvelle user story ou fonctionnalité dans un code existant, le code va s'enrichir et une partie de l'existant va changer.
La détection ici consiste à trouver le bon endroit où écrire cette nouvelle fonctionnalité.
Quel contrôleur ? Il existe une fonction métier connexe ou je dois en créer une ?

## Financement

Avoir des tests qui prouvent l'existence et le bon fonctionnement de vos règles métier et la bonne intégration avec votre site web et votre persistence, fait parti du travail de développement.
Le refactoring du code existant aussi même si parfois ce n'est pas anodin.
Ces deux activités doivent donc être incluses dans votre chiffrage/estimation/engagement !
C'est votre responsabilité, votre façon de travailler, ce n'est pas négociable, quelque soit votre façon de travailler :-)

## Capture de l'existant

Evidement, vous avez intérêt à avoir des tests unitaires automatisés pour pouvoir prendre votre code existant pour de la pate à modeler.
Si votre seule preuve de bon fonctionnement est le code de production en production, il est impossible de le changer sereinement.
Si vous avez confiance dans une suite de test pour prouver l'existence de tout le fonctionnel attendu, même le code existant devient modifiable !

## Refactoring

Ca commence par passer d'une constante à une variable, puis d'une valeur à une liste, etc...
Et ca ressemble aux [priorités des prémisses transformation](https://en.wikipedia.org/wiki/Transformation_Priority_Premise#The_Transformations[3]) mais ensuite, ça dépasse la seule fonction/méthode/procédure.
On utilise alors des techniques de déplacement de bouts d'algorithmes et de données.

Ce sont les techniques les plus documentées :
	- Le [Refactoring de Martin Fowler](https://refactoring.com/catalog/) qui va droit au but
	- Le [refactoring Guru](https://refactoring.guru/refactoring/techniques) qui présente aussi des [codes smells](https://refactoring.guru/refactoring/smells) qui déclenchent une refactoring qui visera peut-être un [design pattern](https://refactoring.guru/design-patterns/catalog)
	- Le [Source Making](https://sourcemaking.com/refactoring/refactorings) qui présente un peu plus de contexte que le Guru avec des anti-patterns de dev, d'archi et d'orga


A noter que certains mouvements de refactoring sont automatisés par les IDE, n'hésitez pas a chercher des tutoriels vidéo (ou non) de votre IDE qui exécute ce mouvement de refactoring comme [Intellij](https://www.jetbrains.com/help/idea/replace-conditional-logic-with-strategy-pattern.html)

## Validation

Encore une fois, je vous souhaite d'avoir des tests automatisés qui prouvent le bon fonctionnement de l'ancien fonctionnel, mais aussi du nouveau !
Il suffit alors de les relancer.

# Les chantiers de refactoring

## Détection

Il y a plusieurs bonnes raisons de se faire un refactoring un peu large.
D'abord, il y a des problèmes de sécurités que l'on découvre en regardant le [top 10 de l'Owasp](https://owasp.org/Top10/), ensuite avec les rapports de tests d'intrusion ou d'audit.
Moins critique, mais plus fréquent, les sujets de mises à jour de frameworks et de librairies à cause :
1. Encore, de la sécurité car vous vous êtes abonnés aux [publications des CVE](https://www.cve.org/ResourcesSupport/Resources#CVEListDataFeeds) (/!\ ce que je n'ai jamais fait, j'étais abonné aux sorties des dépendances que j'utilise, donc à leur patchs de sécurités), aujourd'hui, on utilise des dépôts internes qui scanne les vulnérabilitées connues
2. De l'obsolescence, autrement dit, de la fin de support mais aussi de la fin de vie d'une technologie (Soap, Server Side Rendering, ...)
3. De nouvelles fonctionnalités qui permettent de nouvelles capacités.


## Financement

### Gestion de risques et d'opportunités
Nous ne sommes plus sur une méthode de production de code comme pour les refactoring au fil de l'eau ou le TDD.
Lorsqu'un évènement extérieur implique une demande de changement, c'est un grain de sable.
Comme pour les [[stratégies de tests]], on est dans la gestion de risque.
Pour rappel, le coût d'un risque est l'association du coût total d'un incident et la probabilité qu'il survienne.
*Le coût d'un incident* implique tellement de choses :
- sa détection
- le ratio d'utilisateurs/client gênés ou bloqués et leur capacité d'allez voir un concurrent
- le temps des opérationnels pour reproduire, analyser, corriger, vérifier, relivrer, parfois en astreinte... (je le vends bien, non ?)
- si ca ne suffit pas, rajoutez le coût du retard de ce que l'on aurais fait sans l'incident
- si ca ne suffit pas, rajoutez le coût de la confiance perdue, ou la réputation, ...

*La probabilité d'un incident* n'est pas qu'un nombre entre 0 et 1, mais aussi une fréquence et un ratio d'utilisateurs (mais je l'ai déjà compté dans le coût de l'incident).

Bref, ce type de refactoring consiste souvent à s'adapter à un nouveau contexte métier ou technique, à enlever un frein.
C'est souvent le coût de ne pas le faire qui finance/justifie/dimensionne l'investissement pour le faire.

A noter : Il y aura toujours des librairies qui vieillissent, du temps qui avance et de nouveaux refactorings pour être à jour.
Il serait sage de la part des opérationnels de trouver des solutions qui permettent de pauser cette course le temps d'engranger de la trésorerie, quitte à passer de PHP 7 au 10 dans 3 ans sans migrer par les versions intermédiaires.
Si vous n'avez pas de problème de recrutement du niveau de compétences minimal sur votre stack actuelle et que la nouvelle stack n'apporte pas de fonctionnalités essentielles, les mises à jour se réfléchissent.

## Capture de l'existant

## Refactoring

## Validation


# Les refontes

## Détection

## Financement

## Capture de l'existant

## Refactoring

## Validation


	- https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/code-katas#refactoring