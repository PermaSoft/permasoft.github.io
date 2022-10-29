Lisibilité : Facile à lire
Utilité : Confirme le bon sens

Il recueil plein d'anecdotes et de conseils pour faire un travail simple et pérenne avec des punchline dont je me sers encore des années plus tard comme :
* l'hélicoptère
* les lacets
* les formats binaires Vs caractères

## L'hélicoptère

## Les lacets

## Les formats binaires Vs caractères

Ce livre nous fait réfléchir aux limitations d'un format binaire pour sa maintenance.
Il faut un logiciel pour le lire, là où un fichier caractère est lisible par un humain sans plus d'outil.
Si on perd le logiciel, on perd tous les messages encodé dans ce format binaire.
Le logiciel de lecture, n'est jamais inclu dans le message...
Au mieux, [les premiers octets peuvent déterminer le format binaire utilisé](https://en.wikipedia.org/wiki/Magic_number_(programming)#In_files) et a vous de trouver un lecteur adapté.
Alors qu'un format texte peut être lu par un humain, vous pouvez perdre votre logiciel sans perdre vos messages.
Le format texte, comme les formats binaire peuvent être lu par des logiciels.
D'un point de vue pérennité, on a donc le meilleur des deux monde avec un format texte.
Les formats binaire sont nécessaire pour afficher ce que l'on ne peut pas exprimer avec du texte : les images, la musique, ...
L'autre point fort des formats binaire est leur densité, leur capacité à exprimer les informations d'un format texte en utilisant moins de place, moins d'octets, donc une plus haute performance quand on doit transmettre beaucoup de messages.
Pour un développeur, il peut être utile de toujours commencer par un format texte en développant son logiciel et d'ajouter une capacité configurable de transmettre en binaire plus tard pour économiser des ressources (donc des factures en cloud) ou gagner en performances.
