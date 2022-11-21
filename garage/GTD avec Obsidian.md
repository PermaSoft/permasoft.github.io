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
Si vous voulez une autre vision du même setup, voici la vidéo qui m'a fait expérimenter ce plugin :
[Actually getting things done with Obsidian // Checklist plugin](https://www.youtube.com/watch?v=ODhHTngIMJE)

#### Plugins Internes (Principaux)

Il y a beaucoup de plugins inclus qui n'ont pas d'impact sur ma façon de travailler.
Ceci dis, j'ai trouvé deux plugins sur lesquels j'ai une opinion.

**La sauvegarde de workspace** permet d'inclure votre configuration dans les éléments synchronisés.
C'est très pratique au début, en phase de bidouille pour avoir les dernière trouvaille sur chaque ordinateur et sur le téléphone.
Assez vite, on souhaite une configuration sur téléphone plus adapté à sa taille d'écran (sans rétro lien affichés ou autre).
Il faudra désactiver cette sauvegarde des workspace sur chaque périphérique si on ne veut pas qu'ils se re-déploient à nouveau au fil des synchronisations.

**La note quotidienne** et son template me permettent d'ouvrir obsidian sur un fichier contenant déjà une \#todo/DateDuJour qu'il ne me reste qu'à remplir.

'''
#todo/{{date:YYYY-MM-DD}}
- [ ] 
'''





