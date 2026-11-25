# Portfolio

Portfolio personal hecho con [Astro](https://astro.build), desplegado en Vercel.
El contenido sale de dos archivos JSON: `cv.json` (español, ruta `/`) y `cv_english.json` (inglés, ruta `/en`).
Los tipos del JSON están en `src/cv.d.ts`.

## Comandos

| Comando           | Acción                                    |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Chequea tipos y genera `./dist`           |
| `npm run preview` | Previsualiza el build                     |

## Estructura

```
src/
├── components/     Portfolio, Section, LevelRow, KeyboardManager
│   └── sections/   Hero, About, Experience, Education, Projects, Skills, Languages
├── icons/          Íconos SVG como componentes
├── layouts/        Layout base (head + estilos globales)
├── pages/          index (es) y en (en)
└── utils/          Helpers (fechas)
```

Basado en el diseño de [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json).
