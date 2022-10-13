 La Métaphore du développeur

Les métaphores de notre métier avec les bâtisseurs, les chirurgiens, les artisans ou les jardiniers ont des limites de validité que seul les développeurs peuvent identifier.
L'auditoire qui n'est pas du métier va appliquer la métaphore complète sur notre métier sans en connaitre les limites... 
Ils se construiront donc des idées erronées de notre métier.

La seule manière de décrire notre métier est de parler de notre métier.
Il n'y a pas de raccourcis. 
Nous devons comprendre le problème à résoudre de nos utilisateurs souvent humains pour exprimer une solution souvent numérique.
Une solution numérique est un comportement que devra avoir la machine.
L'expression de cette solution (NDLR: du code) doit être formel pour la machine puisse l'appliquer et exhaustive pour que la machine ne plante pas sur un cas inconnu.
En fin, cette expression doit aussi être compréhensible par le futur développeur qui maintiendra cette solution.

## La bonne métaphore est une métaphore du système

Ainsi, décrire le comportement d'une machine réponds plusieurs critères :

1. De manière formelle et exhaustive pour qu'elle réalise les tâches dont nous avons besoin. (Kiss - Keep It Simple Small, Yagni, 3 rules of simple design)
2. De manière imagée pour que le développeur qui maintient le code comprenne l'intention du développeur d'origine. (Clean Code, Domain Driven Design)
3. De manière structurée donc bien rangée pour que les développeurs suivants puissent retrouver les détails à maintenir dans une motte de fonctionnalités utiles. (Software Architecture, Clean Architecture)
4. De manière justifiée pour que le développeur suivant puisse être sûr que la nouvelle fonctionnalité est soit un ajout, soit une modification d'un comportement existant et ainsi retirer en confiance le code devenu obsolète pour ne plus le maintenir. (Clean Tests, Behaviour Driven Development)

Finalement, les développeurs codent [*UNE métaphore* du produit/du système](https://xp123.com/articles/the-system-metaphor/).

Le logiciel à des entrées/sorties qui lui permettent d'interagir avec le monde (clavier, souris, réseau, écrans, disque dur, api tierces) de manière numérique.
Le code va donc réaliser une activité numérique qui remplacera ou aurait pu être une activité physique. +
Nous vivons dans un monde physique et nos "entrées/sorties" sont nos sens et notre corps.
Nous imaginons le comportement du logiciel depuis notre monde physique.
Le logiciel ne perçois que le monde numérique. +
Nous expliquons aux machines le comportement qu'elles doivent avoir à l'aide de code adaptant notre contexte physique à son contexte numérique.
Ce code du logiciel est [une métaphore](https://fr.wikipedia.org/wiki/M%C3%A9taphore#Aide_%C3%A0_la_conceptualisation), une représentation numérique limitée de l'activité physique, nécessaire et suffisante pour que le logiciel ait les effets attendus.
