En effet, j'utilise l'outil ou le logiciel [[Garage/Obsidian|Obsidian]] avec la méthode [[Bibliothèque/Getting Things Done/Getting Things Done|GTD]].

## Contraintes techniques

### Accessible sur tous mes appareils
J'utilise un vault sur un partage synchronisé et accessible pour tous mes outils de travail : ordinateurs, téléphone, etc.
Concrètement, le partage est un sous dossier de Google Drive.
Cela fonctionne très bien sur les ordinateurs qui gardent une copie locale à jour sous forme d'un lecteur disque.
Pour les téléphone, le client de google drive ne garde pas de copie locale synchronisée de fichiers ou de sous dossiers.
Les fichiers hors connexion sont retéléchargés à chaque accès si on a du réseau  et mis directement à disposition sinon.
Cela implique une latence de trop dès que l'on a un peu de 5G,4G,3G, hspda+, etc.
J'ai trouvé un outil qui maintient un dossier local synchronisé qui s'appelle [Auto sync](https://play.google.com/store/apps/details?id=com.ttxapps.drivesync).

### Accessible rapidement

#### Plugins Communautaires

Obsidian est plein de plugin trop cools.
Trop.
Ces plugins se chargent souvent au démarrage et augmentent le délai entre le lancement de l'outil et le moment ou on écrit son idée.
Après une cure d'amaigrissement, en plus des quelques plugins principaux, il me reste un seul plugin communautaire : "[checklist](https://obsidian.md/plugins?id=obsidian-checklist-plugin)"
Ce plugin propose un vue qui regroupe toutes les listes marquées d'un titre commençant par un tag \#todo.
Ces tags peuvent grouper vos listes par projets (\#todo/projet1) ou par contexte (\#todo/maison), etc.
Cette vue que j'utilise surtout sur ordinateur m'aide a faire une revue de mes projets en un seul endroit.
Voici la vidéo qui m'a fait expérimenter ce plugin :
[Actually getting things done with Obsidian // Checklist plugin](https://www.youtube.com/watch?v=ODhHTngIMJE)

GTD place les tâches dépendante du temps dans un calendrier.
Obsidian propose des plugins qui affichent [votre calendrier externe dans Obsidian](https://obsidian.md/plugins?id=obsidian-full-calendar).
Cela permet de référencer vos évènements depuis vos notes, mais le calendrier externe reste en lecture seule.
Vous pouvez avoir un calendrier local en écriture.
Bref, je préfère mon calendrier en ligne qui fonctionne déjà sur l'ordinateur et le téléphone.

#### Plugins Internes (Principaux)

Il y a beaucoup de plugins inclus qui n'ont pas d'impact sur ma façon de travailler.
Ceci dis, j'ai trouvé deux plugins sur lesquels j'ai une opinion.

**La sauvegarde de workspace** permet d'inclure votre configuration dans les éléments synchronisés.
C'est très pratique au début, en phase de bidouille pour avoir les dernière trouvaille sur chaque ordinateur et sur le téléphone.
Assez vite, on souhaite une configuration sur téléphone plus adapté à sa taille d'écran (sans rétro lien affichés ou autre).
Il faudra désactiver cette sauvegarde des workspace sur chaque périphérique si on ne veut pas qu'ils se re-déploient à nouveau au fil des synchronisations.

**La note quotidienne** et son template me permettent d'ouvrir obsidian sur un fichier contenant déjà une \#todo/DateDuJour qu'il ne me reste qu'à remplir.
Le fichier de note quotidienne est toujours dans le même répertoire et se nomme toujours avec le même format.
Il m'est très facile d'en faire une revue régulière de mes entrants pour les clarifier.
Le coeur du template de note quotidienne contient cet extrait :
'''
#todo/{{date:YYYY-MM-DD}}
- [ ] 
'''

## Contraintes méthodologiques

La principale contrainte et bientôt la seule (j'espère) est d'essayer des façons de faire jusqu'à ce que ca marche.

Aujourd'hui, fin 2022, 5 mois après mes premières lectures sur le sujet, mon contenu dans Obsidian et répartit dans 3 dossiers : références, tâches et projets.

Les références ont deux sous-dossiers incubations et permanentes.
Incubations contient des notes clarifiées, nommées mais non consommées, ni étudiées.
Permanentes contient des notes, des liens, des idées, des présentations, de la connaissances que je connais, sur lesquelles j'ai une opinion.
Ce dossier est assez informel.
J'y stocke mes bribes d'informations en les nommant, puis je les regroupe par proximité dans des sous dossiers.
Parfois, une information va d'une branche de sous dossier à une autre au grès de mes centres d'intérêts.
Il va falloir que je me penche sur une gestion de connaissance du type [[Bibliothèque/Zettelkasten|Zettelkasten]] pour ranger tout ça.

Le dossier de tâches contient des notes quotidiennes que je n'ai pas encore fini de clarifier/consommer et leur template.
Ce dossier contient donc tout ce que je sors de ma tête pour rester concentré sur mes activités en cours que ce soit préparer une présentation ou un kata pour un client ou jouer avec les enfants.

Enfin, le dossier projets contient une note par projets et un dossier d'archives.
Les notes sont souvent un début de "[[Bibliothèque/Getting Things Done/planification naturelle|planification naturelle]]".
Les notes deviennent souvent un dossier car il contiennent tous les documents utiles au projet : devis, livrables, compte rendu de réunions, temps passé, etc.
Lors du passage en dossier, j'y place un premier fichier "Objectifs" qui contient le pourquoi et le quoi du projet.
Le deuxième fichier porte le nom du dossier ou presque et contient le comment, le brainstorming, les listes de choses à faire, donc les listes de type \#todo/monProjet.

