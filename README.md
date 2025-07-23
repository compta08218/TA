# Portail d'Authentification pour Tableau d'Amortissement

Ce projet est une application web simple et sécurisée qui fournit une page de connexion pour protéger l'accès à un tableau d'amortissement financier. Il utilise Supabase pour la gestion de l'authentification.

## ✨ Fonctionnalités

-   Page de connexion professionnelle et épurée.
-   Authentification sécurisée gérée par Supabase.
-   Redirection automatique vers le tableau de bord après une connexion réussie.
-   Persistance de la session (un utilisateur connecté le reste lors de ses prochaines visites).

## 🚀 Démarrage Rapide

### 1. Prérequis

-   Un projet Supabase.
-   Un navigateur web.

### 2. Configuration

1.  **Configurer Supabase :**
    -   Connectez-vous à votre tableau de bord Supabase.
    -   Allez dans la section **Authentication**.
    -   Cliquez sur **"Add user"** et créez un utilisateur avec les identifiants de votre choix. Pour la configuration initiale, nous avons utilisé :
        -   **Email :** `comptable@example.com`
        -   **Mot de passe :** `4321`

2.  **Configurer le projet localement :**
    -   Ouvrez le fichier `config.js`.
    -   Assurez-vous que les valeurs `URL` et `ANON_KEY` correspondent à celles de votre projet Supabase (disponibles dans `Project Settings > API`).
    -   Mettez à jour `USER_EMAIL` si vous avez choisi un email différent.

### 3. Lancement

Ouvrez simplement le fichier `index.html` dans votre navigateur web. Vous pouvez utiliser une extension comme "Live Server" dans VS Code pour un meilleur environnement de développement.

## 📂 Structure des Fichiers

```
.
├──  S_16400002_Mat_450000_19_26.html  // La page protégée (tableau d'amortissement)
├── config.js                         // Fichier de configuration (clés API, etc.)
├── index.html                        // La page de connexion
├── login.js                          // Logique d'authentification
└── style.css                         // Styles de la page de connexion
```

## 🔒 Sécurité

-   La clé anonyme (`ANON_KEY`) de Supabase est conçue pour être publique et visible dans le code client.
-   La sécurité des données repose sur les **Row Level Security (RLS)** de Supabase, qui doivent être configurées si vous ajoutez des tables de données.
-   Il est fortement recommandé de déployer ce projet à partir d'un **dépôt Git privé** pour éviter d'exposer la structure de vos fichiers et les noms des pages protégées.