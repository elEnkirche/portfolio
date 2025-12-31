# ENVIRONMENT_SETUP - Portfolio de [Ton Nom]

**Date :** 2025-12-31  
**Version :** 1.0

---

## 1. Objectif du document

Ce document explique les **choix techniques et configurations** pour l’environnement de développement du portfolio.  
Il justifie chaque paramètre choisi pour garantir un workflow moderne, performant et maintenable.

---

## 2. Éditeur de code

- **Visual Studio Code (VS Code)**  
  - Gratuit, multiplateforme et open-source  
  - Support natif TypeScript et JSX/TSX  
  - Extensions recommandées :  
    - **ES7+ React/Redux/React-Native snippets** (rapide génération de JSX/TSX)  
    - **Tailwind CSS IntelliSense** (auto-complétion pour Tailwind)  
    - **Prettier** (formatage automatique du code)  
    - **ESLint** (linting pour qualité du code)  
- **GitHub Copilot** : activé via mail étudiant (Student Developer Pack)  
  - Suggestions de code IA pour accélérer le développement  
  - Gratuit pour usage étudiant

---

## 3. Gestion de version

- **Git** pour le suivi du code  
- Repository GitHub pour versioning et déploiement avec **Vercel**  
- Permet un workflow professionnel (branches, pull requests, historique clair)

---

## 4. Node.js et gestionnaire de packages

- **Node.js LTS** (version stable recommandée)  
- Gestionnaire de packages : **npm** (installations et scripts)  
- Alternative possible : **Yarn / PNPM** pour performance accrue

---

## 5. Création du projet Next.js

- Commande utilisée :  
```bash
npx create-next-app@latest . --ts
```
- **Options choisies :**  
  | Question | Choix | Justification |
  |----------|-------|---------------|
  | Linter | ESLint | Standard React/TS, assure code propre et cohérent |
  | React Compiler | Yes | Utilisation de SWC pour build rapide et support TS/JSX |
  | Tailwind CSS | Yes | Pour un design moderne et responsive rapidement |
  | Code dans `src/` | Yes | Séparation du code source et des fichiers de config, meilleure lisibilité |
  | App Router | Yes | Nouveau routing Next.js (pages & layouts centralisés, Server Components, SEO) |
  | Import alias | Yes (`@/*`) | Facilite les imports, évite chemins relatifs compliqués, lisible et maintenable |

---

## 6. Structure initiale du projet

```text
portfolio/
├─ src/
│  ├─ app/           # Pages Next.js
│  ├─ components/    # Composants réutilisables
│  ├─ data/          # Données JSON/TS (projets, compétences)
│  └─ types/         # Typage TypeScript
├─ public/           # Images et assets
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
├─ README.md
└─ FSD_PORTFOLIO.md
```
---

## 7. Configuration supplémentaire

- **Tailwind CSS** : configuration par défaut avec `tailwind.config.js` pointant sur `src/app/**/*` et `src/components/**/*`  
- **Prettier** : `.prettierrc` pour un code formaté automatiquement  
- **ESLint** : règles adaptées à TypeScript + Next.js + React   

---

## 8. Justification globale

- **Stack choisie** : Next.js + TypeScript + Tailwind CSS → moderne, performante et valorisée par les recruteurs  
- **VS Code + Copilot** → workflow efficace et productif  
- **ESLint + Prettier** → code propre et maintenable  
- **`src/`, App Router, alias `@/*`** → structure professionnelle et évolutive  
- **Git + GitHub + Vercel** → versioning clair et déploiement simple  

> Résultat : environnement **optimisé pour un développement propre, rapide et professionnel**, parfaitement adapté au portfolio personnel.
