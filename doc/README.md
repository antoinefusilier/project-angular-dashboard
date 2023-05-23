# ADAC - Assistant to the digitalization and automation of companies

Application de centralisation, uniformisation et automatisation du traitement des données en fonction de besoins spécifique d'une entreprise.

# Présentation

Ce projet ayant pour but de simplifier la digitialisation aux dernières technologies dans un environnement intuitif et évolutif. La recherche et développement occupera une grande partie et sera accompagner de ressources.

Méthodoligie et analyses de projet.

Nous suiverons en fonctions des démandes, une des différentes méthodes de gestion de projets tel que : 

- Agile : [Voir ici](https://www.planzone.fr/blog/quest-ce-que-la-methodologie-agile)
- Event Chain : [Voir ici](https://www.planzone.fr/blog/quest-ce-que-la-methodologie-event-chain)
- Chemin Critique : [Voir ici](https://www.planzone.fr/blog/quest-ce-que-la-methode-chemin-critique-critical-path)
- Critial Chain Project Managment : [Voir ici](https://www.planzone.fr/blog/quest-ce-que-la-methode-critical-chain-project-management)
- Benefits Réalisation : [Voir ici](https://www.planzone.fr/blog/quest-ce-que-la-methodologie-benefits-realisation)

Se reseigner sur les autres méthode permettra un choix précis et correct.

## Regroupement et analyse des données

En fonction des données présentent, et qu'elle soit pour un client ou bien pour l'avancement de projets interne, les données seront toujours :

- Analyser : Suivant les différentes méthode d'analyse
  - Analyse descriptive : []()
  - Analyse de dispertion : []()
- Controler : Suivant une charte 
- Intégrer : A notre système de gestion de données, puis au projet

# Wokers : SCRUM Master et SCRUM Développeurs

Documentation pour les développeurs. Vous avez rejoins notre réseau de concepteur, et vous souhaitez installer nos outils de travail ? Vous aurez accès à notre espace collectif ou vous trouverez :

- Code sources et authorisation au dépôts Github suivant :
 - Dashboard (dev/prod) : Tableau de bord client générique
 - Welcome (dev/prod) : Site de présentation du projet et de sa documentation.
 - WorkeSpace (dev/prod) : Notre application des gestion des commandes, clients et projets

- Fichiers : Espace de centralisation des données des différents projets (interne/externes partagés)

## Installation et gestion de déploiement web de produits et services

### Technologies

Pour commencer, nous baserons nous outils et autres applications sur les technologies les plus évolutives et moderne possible. Dans notre cas nous avons choisie.

- Un serveur basé sous Débian, comprenant :
  - Serveur NodeJS : Centralisant l'ensemble des opérations et fonctionnalités.
Étant actuellement en étude et developpement, il n'est basé sur aucun compilateur de code à part un gestionnaire d'injection de dépendance : [type Di](https://www.npmjs.com/package/typedi)

Pour sont lancement en production futur il est attendu une reffactorisation avec le framework NestJS : [Apprendre Nest](https://learn.nestjs.com/)
  - Une base MongoDB : base principale des applications
    - [Voir la documentation MongoDB](https://www.mongodb.com/docs/manual/)
  - Une base MySQL (passerelle) : base temporaire en cas de demande spécifique

- Les applications front :
  - ADAC 
    - Welcome : module d'accueil publique
    - Auth : module d'authentification général
    - Dashboard : module principale de gestion de projet par client

Actuellement développer en Javascript avec le [framework Angular](https://fr.wikipedia.org/wiki/Angular) ([Voir doc](https://angular.io/docs)), il est également en développement une version mobile (android/ios) via [capacitor](https://www.npmjs.com/package/@capacitor/core) avec [Android Studio](https://developer.android.com/studio/install)

 - WorkSpace  

### Installation 

Il n'est actuellement pas encore possible de rendre disponible le code sources de ces projets, mais uterieurement il sera disponible sur un GitHub Privé pour les différents collaborateurs. Pour se faire veuillez vous rapprocher par email, pour demander vos identifiants ou bien si vous souhaitez nous rejoindre.

Mais étant requis partie Front :

- Node JS : selon votre image, télécharger et installer les dépendances NodeJS 
https://nodejs.org/en/download 

Ce téléchargement inclura npm (Package Manager)

- Angular :

```bash
npm install -g @angular/cli
```
Attention si problème d'autor sous Windows :
```bash 
# PowerShell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Téléchargement du répository :

Requière Github

Installation de Git en fonction de votre image 

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

```bash
git clone https://${userName}@github.com/cyber-robot-agency/dashboard-angular-frontend
```

Concernant le BackEnd :

Étant directement sur notre serveur débian, nous communiquons avec lui, via le protocol SSH. Les paquets sont déjà installer et télécharger et lister dans le package.json de Node.

Les deux parties communiquent via APIs. Les relations de connection http sont gérer par le reverse proxy de [NGINX](https://www.nginx.com/)

## Dashboard : Modules principaux

User :
- Accueil :
  - Statistiques : Statistique le boutique en ligne
  - Ressources : Lister les différentes ressources externe relié aux projet
- Documentation 
  - Liste, et édition de documentation reliée au projet.
- Produits :
  - Liste, recherche et éditions des produits dans la base du CMS choisi
- Juridique :
  - (Ne sera pas disponible)


Si admin :
- Utilisateurs : Gestion des utilisateurs 

### Exemple : Modules spécifiques au client Leblanc 

A la demande de la spécifités métier de la quincaillerie, bricolage et fournitures industrielles.

Pour donner un exemple d'utilisation, nous présentatons le cas de l'entreprise Leblanc qui souhaitait mettre un systeme en place de synchronisation entre sont ERP et CMS. Ainsi qu'une demande spécifique des refactorisation des données produits. (Attributs produits, regrouper en module accompagner de référence...)

Voici un cas d'utilisation simple.

Cela à demander la conception de deux modules spécifiques :
- Divalto : Module de connection et sauvegarde de données depuis la base SQL Server de l'ERP

- Dompro : Module de connection à un serveur sftp de fichier, à des fin de récupération, partage et lecture des fichiers de données au format csv.


## WorkSpace : A venir...

Module de gestion des projets clients.

L'idée étant :

- La définition des différentes bases de données, accèss, serveur...
- Génération d'un projet en fonction des paramètre précédement renseigner.
- Controle du projet, édition du module spécifiques. Etc...
