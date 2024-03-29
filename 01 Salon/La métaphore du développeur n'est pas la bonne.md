---
title: Métaphores De Développeurs
layout: default

eleventyNavigation:
  key: La métaphore du développeur n'est pas la bonne
  title: La métaphore du développeur n'est pas la bonne
  parent: salon
  order: 1

---

Les métaphores de notre métier avec les bâtisseurs, les chirurgiens, les artisans ou les jardiniers ont des limites de validité que seul les développeurs peuvent identifier.
Chaque métaphore que l'on utilise sers d'image pour passer un message. Une fois le message transmis, le message et la métaphore restent dans la tête de l'auditoire.
J'ai trop régulièrement discuté avec des personnes intelligentes qui continuaient la métaphore au-delà du message d'origine, au delà de sa validité.
Quand la métaphore n'est plus valide, les raisonnement deviennent surprenant, dont les suivants que je viens d'inventer :
- Les bâtisseurs font des logiciels qu'on ne peut pas refactorer.
- Les chirurgiens suivent un protocole strict établi et reconnu quand ils réparent leur code.
- Les artisans sont très fiers de leur brioche parfaite et "inimitable" (donc pas maintenable par un autre).
- Les jardiniers entretiennent des IAs qui se développent avec de l'eau, du soleil et de l'autonomie
Les personnes intelligentes dont je parle sont des collègues ou des clients ayant d'autres métiers que le développement et on fait des erreurs de raisonnement avec nos métaphores, bien plus petites, légères et/ou fines que les précédentes, mais tout de même, ils s'étaient fait de mauvaises idées avec nos belles métaphores.

J'ai le sentiment que la seule manière de décrire notre métier est de parler de notre métier.
Il n'y a pas de raccourcis. 
Nous devons comprendre le problème à résoudre de nos utilisateurs souvent humains pour exprimer une solution souvent numérique.
Une solution numérique est un comportement que devra avoir la machine.
L'expression de cette solution (NDLR: du code) doit être formelle pour que la machine puisse l'appliquer et exhaustive pour que la machine ne plante pas sur un cas inconnu.
Et pour les développeurs (souvent artisans), cette expression doit aussi être compréhensible par le futur développeur qui maintiendra cette solution.

Ainsi, décrire le comportement d'une machine réponds plusieurs critères :

1. De manière formelle et exhaustive pour qu'elle réalise les tâches dont nous avons besoin. (Kiss - Keep It Simple & Small, Yagni, 3 Rules of simple design)
2. De manière verbalisée avec un langage métier pour que le développeur qui maintient le code comprenne l'intention du développeur d'origine. (Clean Code, Domain Driven Design)
3. De manière structurée donc bien rangée pour que les développeurs suivants puissent retrouver les détails à maintenir dans une motte de fonctionnalités utiles. (Software Architecture, Hexagonal Architecture, ...)
4. De manière justifiée pour que le développeur suivant puisse être sûr que la nouvelle fonctionnalité est soit un ajout, soit une modification d'un comportement existant et ainsi retirer en confiance le code devenu obsolète pour ne plus le maintenir. (Clean Tests, Behaviour Driven Development)

Finalement, les développeurs codent une comparaison implicite entre une activité métier et un comportement de machine, autrement dit, [*UNE métaphore*](https://fr.wikipedia.org/wiki/M%C3%A9taphore#Aide_%C3%A0_la_conceptualisation)(https://fr.wikipedia.org/wiki/M%C3%A9taphore#Aide_%C3%A0_la_conceptualisation) du produit/du système réel.
Cette [[01 Salon/Métaphore du système]] est presque universelle dans les applications de gestion d'entreprise. 

