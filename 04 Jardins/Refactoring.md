
Le refactoring, c'est le changement de la structure du code sans en changer les fonctionnalités.
Ce changement de structure permet d'améliorer un design qui était adapté à un ancien contexte pour le rendre adapté à un nouveau contexte.
Les temps changent, les demandes clients et les librairies sur lesquelles ont s'appuient aussi.

Il existe plusieurs hauteurs pour un refactoring :
- le fil de l'eau (au quotidien) où l'on adapte notre algorithme à la nouvelle fonctionnalité en cours de développement : la 3e étape en TDD, la moitié de votre dev sans test first.
- le chantier où l'on s'adapte à un nouveau contexte sans remettre l'existant en cause (mise à jour de librairies et frameworks, virage dans la roadmap, nouveaux types de demandes clients)
- la refonte où l'on change de stack ou d'architecture logicielle

Il y a un tronc commun dans tous ces refactorings:
- on détecte un problème : code smell, code fragile (générateur de bugs à chaque évolution), baisse de productivité sur certaines zones, fin de support sur la stack
- on capture le fonctionnement actuel : tests unitaires, tests d'intégrations par assertions ou par approbations, double run
- On se décide sur une conception cible à atteindre, et on "refactore"
- On vérifie que l'on a rien cassé

# Les refactoring du quotidien

Lorsque l'on ajoute une nouvelle user story ou fonctionnalité dans un code existant, le code va s'enrichir et une partie de l'existant va changer.
Ca commence par passer d'une constante à une variable, puis d'une valeur à une liste, etc...
Après ce début de tran

Ce sont les techniques les plus documentées :
	- Le [Refactoring de Martin Fowler](https://refactoring.com/catalog/) qui va droit au but
	- Le [refactoring Guru](https://refactoring.guru/refactoring/techniques) qui présente aussi des [codes smells](https://refactoring.guru/refactoring/smells) qui déclenchent une refactoring qui visera peut-être un [design pattern](https://refactoring.guru/design-patterns/catalog)
	- Le [Source Making](https://sourcemaking.com/refactoring/refactorings) qui présente un peu plus de contexte que le Guru avec des anti-patterns de dev, d'archi et d'orga


A noter que certains mouvements de refactoring sont automatisés par les IDE, n'hésitez pas a chercher des tutoriels vidéo (ou non) de votre IDE qui exécute ce mouvement de refactoring comme [Intellij](https://www.jetbrains.com/help/idea/replace-conditional-logic-with-strategy-pattern.html)

 
	- https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/code-katas#refactoring