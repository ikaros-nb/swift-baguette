# Swift Baguette

## Structure du projet

```bash
/
├── public/
│   ├── assets/
|   ├── pagefind/
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── favicon.svg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── some-blog-posts.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── constants.ts
│   └── content.config.ts
└── astro.config.ts
```

## Commandes

Toutes les commandes se lancent depuis la racine du projet, dans un terminal :

| Commande | Action |
| :------- | :------- |
| `pnpm install`               | Installe les dépendances |
| `pnpm run dev`               | Démarre le serveur de développement local sur `localhost:4321` |
| `pnpm run build`             | Compile le site pour la production dans le dossier `./dist/` |
| `pnpm run preview`           | Prévisualise le build localement avant le déploiement |

## Licence

Le code source de ce site (hors contenus des articles) est distribué sous licence MIT.

Le contenu rédactionnel de ce blog, y compris les articles et les extraits de code inclus dans ces articles, est protégé par la licence [Creative Commons Attribution - Pas d’Utilisation Commerciale - Pas de Modification 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr).

Cela signifie que vous êtes autorisé à partager ce contenu tel qu’il est, en citant l’auteur, mais **toute modification ou utilisation commerciale est interdite sans autorisation écrite préalable**.

## Remerciements

[AstroPaper](https://github.com/satnaing/astro-paper) est un thème Astro créé par [Sat Naing](https://satnaing.dev).