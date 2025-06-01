# Mapa interactivo de la recuperación del lince ibérico (2002–2023)

Este proyecto es una narrativa visual interactiva desarrollada a partir de la plantilla [Mapbox Storytelling](https://github.com/mapbox/storytelling). que muestra la evolución de la población del lince ibérico (*Lynx pardinus*) en la península ibérica, visualizando los núcleos activos en 2024 a través de un recorrido sobre el mapa.

## Estructura del proyecto

### `index.html`
Archivo principal del proyecto. Carga el mapa, define la estructura del DOM y contiene los scripts necesarios para la narrativa scroll-driven. Aquí se integran:

- El `mapboxgl.Map`
- Los callbacks para cada capítulo (capítulos definidos en `config.js`)
- La configuración de las burbujas proporcionales según el número de linces (`circle-radius`) y sus etiquetas (`symbol` con nombre y número)
- Un diseño responsive básico mediante CSS inline

### `config.js`
Archivo de configuración narrativa. Define cada capítulo del scrollytelling con:

- `id`, `title`, `description`: contenido del capítulo
- `location`: coordenadas, zoom, pitch y bearing del mapa
- `onChapterEnter`: reglas de estilo por capa

### `linces2024.geojson`
Capa de datos en formato GeoJSON con los núcleos de población del lince ibérico en 2024. Cada Feature contiene:

- `region`: comunidad autónoma o país
- `nombre`: nombre del núcleo
- `total_linces`: número total de ejemplares censados
