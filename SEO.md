# SEO local | MICA Learning

Estado: la maqueta incluye la capa SEO de la home. Los volúmenes de búsqueda están **pendientes**: la cuenta de Semrush no tenía saldo de API cuando se preparó esto, así que no hay cifras ni dificultad de palabras clave. Todo lo de abajo se basa en las palabras clave indicadas, no en datos medidos.

## Palabras clave y dónde se trabajan

| Palabra clave (es) | Palabra clave (ca) | Dónde aparece en la home |
|---|---|---|
| academia de inglés en Granollers | acadèmia d'anglès a Granollers | Title, H1, meta descripción, pie |
| academia de idiomas en Granollers | acadèmia d'idiomas a Granollers | Título de la sección Método, pie, schema |
| clases de inglés en Granollers | classes d'anglès a Granollers | H2 de "para cada edad", textos de la home |
| cursos de inglés en Granollers | cursos d'anglès a Granollers | H2 de Cursos, menú |
| clases particulares de inglés en Granollers | classes particulars d'anglès a Granollers | H3 de la tarjeta de particulares |
| preparación exámenes Cambridge en Granollers | preparació d'exàmens Cambridge a Granollers | H2 de la sección Cambridge |
| inglés para niños / adolescentes | anglès per a nens / adolescents | Primera tarjeta de "para cada edad" |
| inglés para empresas en Granollers | anglès per a empreses a Granollers | H3 de la tarjeta de empresas |
| profesores de inglés en Granollers | professors d'anglès a Granollers | H2 de Equipo |
| francés / alemán en Granollers | francès / alemany a Granollers | Pregunta frecuente y ficha de Eric |

## Hecho en la maqueta
- Versión en castellano (`/`) y en catalán (`/ca/`) con `hreflang` cruzado y `x-default`.
- Title, meta descripción, canonical y Open Graph por idioma.
- Un solo H1 con la palabra clave principal; H2 y H3 con palabras clave naturales.
- Datos estructurados: `EducationalOrganization` y `LocalBusiness` (dirección, teléfonos, horario) y `FAQPage`.
- Bloque de preguntas frecuentes visible, que coincide con el `FAQPage` (con respuestas sacadas de la web actual).
- Textos alternativos descriptivos, tamaños de imagen indicados y carga diferida.
- Teléfonos pulsables y mapa de la dirección.

## Pendiente antes de publicar
1. **Quitar `noindex`** (hay un comentario en el `<head>` de cada página).
2. Descargar y comprimir las imágenes a una carpeta propia, con nombres descriptivos (por ejemplo `clase-ingles-granollers.webp`).
3. Medir volúmenes y dificultad cuando haya saldo en Semrush, o con el Planificador de palabras clave de Google, sin mezclar fuentes.
4. Comprobar que las páginas Cursos y Método no sigan con `noindex` (en la web actual lo llevaban).
5. Páginas propias por servicio, que son las que posicionan mejor que una sola home:
   - `/clases-de-ingles-granollers/`
   - `/clases-particulares-ingles-granollers/`
   - `/preparacion-cambridge-granollers/`
   - `/ingles-para-ninos-granollers/`
   - `/ingles-para-empresas-granollers/`
   (y su equivalente en `/ca/`)
6. Ficha de Google Business Profile con la misma dirección, teléfono y horario.
7. Añadir coordenadas (`geo`) al schema y reseñas reales si el cliente las tiene.
8. Sitemap XML, robots.txt y alta en Search Console.
