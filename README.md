# Celestia — Hero

Sección hero estática (`index.html`, `styles.css`, `main.js`). Abre `index.html` en el navegador.

## Assets pendientes

Durante el desarrollo el video y el póster se cargan desde las URLs remotas. Antes de publicar, descárgalos y colócalos en la carpeta pública del proyecto, y cambia `src` y `poster` en `index.html`:

| Asset  | URL de desarrollo | Ruta local |
| ------ | ----------------- | ---------- |
| Video  | https://media.dinamosites.com/library/v1/sections/ritual-celeste-video-ab8ddd70b615.mp4 | `/media/ritual-celeste-video.mp4` |
| Póster | https://media.dinamosites.com/library/v1/sections/ritual-celeste-poster-252a34000387.jpg | `/media/ritual-celeste-poster.jpg` |

La descarga automática falló (403 desde el entorno de desarrollo), así que ambos archivos siguen pendientes. Si el video no carga, el hero muestra el aviso «Video pendiente: ritual-celeste-video.mp4».
