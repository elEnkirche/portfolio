# FSD – Portfolio Développeur  
**Functional Specification Document**

---

## 1. Objectif du projet

L’objectif de ce projet est de concevoir et développer un **portfolio personnel de développeur**, servant à la fois de :
- Page de présentation professionnelle
- CV en ligne narratif
- Vitrine de projets et de compétences
- Point de contact professionnel

Le site doit être moderne, clair, maintenable et conforme aux bonnes pratiques du développement web.

---

## 2. Règles de développement

### 2.1 Stack technique

- **Framework** : Next.js (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Versioning** : Git
- **Gestion de projet / code** : GitHub
- **Environnement de développement** : VS Code + GitHub Copilot

### 2.2 Principes de développement

- Code propre, lisible et structuré
- Découpage en composants réutilisables
- Typage strict avec TypeScript
- Séparation claire entre données, logique et affichage
- Respect des bonnes pratiques d’accessibilité (HTML sémantique, navigation clavier)

---

## 3. Architecture générale du site

Le portfolio est structuré autour de plusieurs pages accessibles via une navigation principale.

### Pages principales :
- `/` → Présentation / CV
- `/projets` → Projets
- `/passions` → Passions
- `/contact` → Contact

---

## 4. Page Présentation (Accueil / CV)

La page de présentation constitue le **cœur du portfolio**.  
Elle remplit le rôle d’un **CV narratif**, lisible et structuré.

### 4.1 Structure de la page

#### 4.1.1 Profil / À propos
- Présentation générale
- Parcours et positionnement professionnel
- Objectifs actuels

#### 4.1.2 Expériences professionnelles
- Liste des expériences
- Pour chaque expérience :
  - Intitulé du poste
  - Entreprise
  - Dates
  - Description des missions
  - Technologies utilisées

#### 4.1.3 Formation
- Parcours académique
- Formations professionnelles
- Certifications éventuelles

#### 4.1.4 Compétences
- Langages de programmation
- Frameworks et librairies
- Outils (Git, GitHub, CI/CD, etc.)
- Compétences transverses (méthodologie, collaboration, etc.)

#### 4.1.5 Langues (optionnel)
- Langues parlées
- Niveau estimé

---

## 5. Page Projets

### Objectif
Présenter les projets réalisés afin d’illustrer les compétences techniques.

### Structure
- Liste de projets sous forme de cartes
- Pour chaque projet :
  - Nom
  - Description
  - Technologies utilisées
  - Lien vers le repository GitHub
  - Lien vers une démo (si disponible)

> À l’état initial, cette page peut être vide ou contenir un message “Projets à venir”.

---

## 6. Page Passions

### Objectif
Humaniser le profil et montrer des centres d’intérêt personnels.

### Sections prévues
- **Musique**
  - Utilisation de l’API iTunes
  - Affichage des albums
  - Statistiques simples (genres, artistes, etc.)
- **Jardinage**
- **Autres passions**

---

## 7. Page Contact

### Objectif
Permettre une prise de contact simple et professionnelle.

### Contenu
- Texte de proposition de contact
- Liens vers les réseaux :
  - LinkedIn
  - GitHub
  - Autres réseaux pertinents
- (Optionnel) Formulaire de contact

---

## 8. Évolutions prévues

- Ajout d’animations légères (scroll, transitions)
- Version PDF du CV téléchargeable
- Amélioration SEO
- Internationalisation (FR / EN)
- Accessibilité avancée

---

## 9. Conclusion

Ce document définit le cadre fonctionnel du portfolio.  
Il sert de référence tout au long du développement afin de garantir :
- Cohérence
- Qualité
- Évolutivité
