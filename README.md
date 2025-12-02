# TodoList (React + Vite)

Ce projet est une application de gestion de tâches réalisée avec React et Vite. Il a été développé principalement à des fins pédagogiques pour améliorer mes compétences en React : conception de composants, gestion d'état, intégration avec Supabase, et utilisation de TailwindCSS.

Important : ce projet est un prototype d'apprentissage. Il **n'inclut pas** de gestion de comptes/utilisateurs, ni d'authentification, ni de garanties de sécurité pour une utilisation en production.

## Fonctionnalités

- Groupes (création / suppression)
- Tâches (ajout / édition / suppression)
- Marquer une tâche comme complétée
- Stockage des données via Supabase (base distante)
- UI minimale avec TailwindCSS

## Prérequis

- Node.js (16+ recommandé)
- npm ou yarn

## Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Construire pour la production :

```bash
npm run build
```

4. Aperçu de la build :

```bash
npm run preview
```

## Configuration Supabase

L'application utilise Supabase pour stocker `groups` et `todos`. Fournissez les variables d'environnement suivantes (par exemple dans un fichier `.env` à la racine) :

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Le fichier `src/supabaseClient.js` lit ces variables via `import.meta.env`. Attention : **ne pas committer vos clés** publiques dans un dépôt public. Si une clé est exposée, régénérez-la côté Supabase.

## Limitations & Remarques

- Projet pédagogique : pas de gestion d'authentification, pas de sécurité adaptée pour la production.
- Certaines parties restent volontairement simples (ex : notifications basiques, formulaires non-contrôlés). Des améliorations possibles : utiliser une bibliothèque de toasts (`react-toastify`), convertir les formulaires en contrôlés, et centraliser la gestion des erreurs.

## Améliorations possibles

- Ajouter authentification et multi-utilisateurs
- Améliorer l'UX (toasts, validations, confirm modals)
- Tests unitaires / d'intégration
- Déploiement (Netlify, Vercel, ou autre)

---

Si vous voulez que j'ajoute des screenshots, exemples de requêtes Supabase, ou que j'implémente un composant de notifications, dites-le et je m'en charge.
