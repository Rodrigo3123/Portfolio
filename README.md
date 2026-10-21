# Portafolio · Rodrigo Gamero Serrano

Sitio estático (HTML, CSS y JavaScript sin dependencias) listo para GitHub Pages.

## Estructura

```
index.html                 Página única con todas las secciones
assets/css/styles.css      Estilos (tokens de color y tipografía al inicio)
assets/js/main.js          Menú móvil, galerías y visor de imágenes
assets/img/                Foto, favicon y capturas de proyectos (.webp)
assets/cv/                 CV en PDF para el botón "Descargar CV"
.nojekyll                  Indica a GitHub Pages que publique los archivos tal cual
```

## Publicar en GitHub Pages

1. Entra a tu repositorio `Portfolio` en GitHub (o crea uno nuevo).
2. Borra los archivos anteriores y sube todo el contenido de esta carpeta (no la carpeta en sí): **Add file → Upload files**, arrastra los archivos y presiona **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio queda en `https://rodrigo3123.github.io/Portfolio/`.

> Si nombras el repositorio `rodrigo3123.github.io`, la dirección queda más corta: `https://rodrigo3123.github.io/`.

## Cómo actualizar

- **Agregar capturas:** guarda la imagen en `assets/img/projects/` (de preferencia .webp de 1600 px de ancho) y agrega en la galería del proyecto: un `<input class="gallery-radio">` más, un `<a class="gallery-main">` dentro de `.gallery-stage` y un `<label>` dentro de `.gallery-thumbs` (copia los existentes y cambia el número del `id` y del `for`). Admite hasta 6 imágenes por proyecto.
- **Cambiar el CV:** reemplaza `assets/cv/CV_Rodrigo_Gamero_Serrano.pdf` con el mismo nombre.
- **Colores y tipografía:** se cambian en las variables de `:root` al inicio de `styles.css`.
- **Cronograma:** cada barra usa `grid-column`. Las columnas son: 2 = 2021 ene–jun, 3 = 2021 jul–dic, 4 = 2022–23, 5–6 = 2024, 7–8 = 2025, 9–10 = 2026.
