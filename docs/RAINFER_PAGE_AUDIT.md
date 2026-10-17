# Auditoría comparativa del sitio Rainfer

Fecha de revisión: 2026-10-17  
Repositorio auditado: `itsbaask/rainfer-sanctuary`  
Sitio oficial de referencia: https://rainfer.org/  
Sitio reconstruido: https://itsbaask.github.io/rainfer-sanctuary/

## Alcance y criterio

Esta auditoría compara el inventario de páginas públicas guardado en `reports/page_inventory.json` y `docs/PAGE_INVENTORY.md` con las rutas declaradas en `src/content/site.ts`, la plantilla `src/pages/[...slug].astro` y el renderizador `src/components/PageContent.astro`.

No es una copia del código fuente privado del servidor oficial: el código del sitio oficial no está disponible para inspección completa. Se revisan el HTML público/inventario archivado y el código de este repositorio. Una ruta que existe no necesariamente equivale a una página reconstruida fielmente: muchas páginas locales son resúmenes editoriales genéricos, usan imágenes de Unsplash y enlazan a Rainfer para los datos operativos.

## Hallazgo ejecutivo

La web local tiene rutas generales para el centro, trabajo, especies, cursos, visitas, ayuda, noticias, impacto, criterios editoriales y contacto. La brecha principal no es solo la cantidad de URLs: faltan subpáginas temáticas específicas, perfiles de animales/grupos, páginas de campañas, programas educativos segmentados, contenido histórico de noticias/medios y páginas de donación detalladas. La tienda se presenta como un bloque promocional enlazado al sitio oficial, no como tienda local con catálogo y pago.

## Matriz de páginas principales

| Área / página oficial | Ruta local actual | Estado comparativo | Trabajo recomendado |
|---|---|---|---|
| Inicio | `/`, `/es/`, `/en/` | Parcial: hay home propia; validar contenido, imágenes y enlaces | Prioridad alta: revisar imágenes, claims y enlaces frente a fuente oficial |
| Quiénes somos | `/es/el-centro`, `/en/about` | Existe, resumen genérico | Sustituir texto genérico por contenido verificado y estructura de la fuente |
| Equipo técnico | `/es/el-centro/equipo-tecnico`, `/en/about/technical-team` | Ruta existente, marcada `missing-info` | Recuperar roles y contenido verificable; no inventar nombres/biografías |
| Qué hacemos | `/es/que-hacemos`, `/en/what-we-do` | Existe, parcial | Expandir áreas con páginas de destino propias |
| Rescate y rehabilitación | `/es/que-hacemos/rescate-y-rehabilitacion` | Existe, contenido general | Añadir proceso y alcance solo a partir de fuente oficial |
| Formación y educación | `/es/que-hacemos/formacion-y-educacion` | Existe, parcial | Enlazar y construir subpáginas de cursos, prácticas y educación |
| Los primates | `/es/los-primates-2` | Existe, parcial | Añadir perfiles completos y navegación por especie |
| Chimpancés | `/es/los-primates-2/chimpances` | Existe, perfil general | Añadir información oficial y accesible sobre grupos enlazados |
| Orangutanes | `/es/los-primates-2/orangutan` | Existe, perfil general | Añadir perfil específico y animales solo con datos confirmados |
| Gibones | `/es/los-primates-2/gibon` | Existe, perfil general | Añadir perfil específico y referencias oficiales |
| Capuchinos | `/es/los-primates-2/capuchinos` | Existe, perfil general | Añadir perfil específico y referencias oficiales |
| Cursos | `/es/cursos`, `/en/courses` | Ruta existente; oferta y fechas no reconstruidas | Construir índice por tipo, edición vigente y archivo histórico |
| Visítanos | `/es/visitanos`, `/en/visit` | Existe; deriva a información oficial para condiciones | Añadir enlaces claros a cada programa y a la solicitud oficial |
| Visitas guiadas | `/es/visitanos/visitas-guiadas` | Existe, marcada `missing-info` | Añadir condiciones, pasos y formulario oficial verificados |
| Qué puedes hacer tú | `/es/que-puedes-hacer-tu` | Existe, parcial | Desglosar cada método de apoyo en páginas propias |
| Apadrina un primate | `/es/que-puedes-hacer-tu/apadrina-un-primate` | Existe, contenido resumido | Reproducir modalidades y pasos actuales con fuente oficial |
| Donaciones | `/es/que-puedes-hacer-tu/donaciones` | Ruta existente; revisar detalle de medios y condiciones | Mostrar vías verificadas (transferencia, PayPal, Bizum/materiales, si siguen vigentes) |
| Voluntariado | `/es/que-puedes-hacer-tu/voluntariado` | Ruta existente según inventario de contenido | Completar requisitos, tipos y proceso a partir de información oficial |
| Noticias | `/es/noticias` | Índice existente, archivo limitado | Crear listado de artículos con fechas, imágenes permitidas y enlaces a fuente |
| Impacto | `/es/impacto` | Página editorial local; no es una página oficial equivalente confirmada | Etiquetarla claramente como editorial o enlazar datos oficiales comprobables |
| Criterios editoriales | `/es/criterios-editoriales` | Página propia del proyecto, no página oficial equivalente | Mantenerla como transparencia de la reconstrucción |
| Contacto | `/es/contacto` | Existe, formulario solo valida en navegador | No prometer envío; integrar solo con autorización y destino aprobado |

## Páginas/subpáginas identificadas en el inventario que no tienen ruta dedicada confirmada

Estas páginas aparecen en el inventario archivado del sitio de referencia, pero no figuran entre las rutas canónicas principales de `src/content/site.ts`. Algunas pueden estar incluidas como alias o páginas heredadas en `src/content/mirror`; deben verificarse una por una antes de marcarlas como totalmente ausentes.

### Primates y grupos
- Grupo Gombe: `los-primates-2/chimpances/grupo-gombe`
- Grupo Manuela: `los-primates-2/chimpances/grupo-manuela`
- Grupo Sammy: `los-primates-2/chimpances/grupo-sammy`
- Lu: `lu`
- Perfiles individuales destacados en el inventario: Boris (orangután), Ximene (gibón), Brutus (capuchino), además de Manuela, Toti y Yaki.

### Formación y educación
- Cursos de primatología: `que-hacemos/formacion-y-educacion/cursos-de-primatologia`
- Cursos y estancias veterinarias: `que-hacemos/formacion-y-educacion/cursos-de-veterinaria`
- Prácticas de empresa: `practicas-de-empresa`
- Oferta educación: `oferta-educacion`
- Oferta mantenimiento: `oferta-mantenimiento`
- Universidades y centros de formación: `visitanos/visitas-colegios-e-institutos/universidades-y-centros-de-formacion`

### Visitas y actividades
- Visitas para colegios de primaria: `visitanos/visitas-colegios`
- Visitas para secundaria y bachillerato: `visitanos/visitas-guiadas-ed-secundaria`
- Visitas para infantil: `visitas-infantil`
- Actividades para colegios e institutos: `visitanos/visitas-colegios-e-institutos`
- Talleres temáticos: `talleres-tematicos`
- Campamentos de verano: `campamentos-de-verano`
- Actividades solidarias / voluntariado corporativo: `visitanos/actividades-solidarias`
- Estancias exclusivas: `que-hacemos/estancias-exclusivas`

### Donaciones, campañas y apoyo
- Necesidades actuales: `que-puedes-hacer-tu/donaciones/necesidades-actuales`
- Apoya una campaña: `apoya-una-campana`
- Teaming: `teaming`
- Lista(s) de deseos: `lista-de-deseos`
- Tienda: `tienda`
- Trabaja con nosotros: `trabaja-con-nosotros`
- Campaña de calefacción / “Regalando calor”: `calefaccion`

### Noticias, medios y archivo
- Rainfer en los medios: `el-centro/noticias` (inventario antiguo también registra `el-centro/noticias.html`)
- Cena benéfica en El Casar: `cena-benefica-en-el-casar`
- Rainfer en L2N: `rainfer-en-l2n`
- Categoría/archivo de noticias: `category/noticias`

### Rutas heredadas / duplicadas
El inventario también contiene variantes `.html`, `/index.html` y URLs antiguas de WordPress con `index.html?p=...`. No deben convertirse automáticamente en páginas distintas: conviene mapearlas mediante redirecciones/aliases a una ruta canónica para evitar duplicación y enlaces rotos.

## Riesgos técnicos y de contenido observados

1. **Contenido genérico:** varias páginas tienen pocos párrafos generales y no recrean la profundidad de la página oficial.
2. **Imágenes:** numerosas rutas usan URLs de Unsplash. Antes de publicar una reconstrucción fiel, reemplazar por recursos propios autorizados o verificar licencia, procedencia y correspondencia con la página.
3. **Formularios:** el formulario de contacto solo valida localmente y no envía datos. Esto debe permanecer explícito hasta una integración aprobada.
4. **Operaciones sensibles al tiempo:** precios, fechas de cursos, disponibilidad de visitas, plazas, métodos de donación y campañas deben revisarse en la fuente oficial antes de mostrarse como actuales.
5. **Enlaces internos/externos:** comprobar que cada tarjeta apunta a una ruta local real o a la página oficial adecuada. Evitar tarjetas sin destino.
6. **SEO y alias:** definir URL canónica y redirecciones para las variantes antiguas; comprobar sitemap, enlaces internos y metadatos por idioma.
7. **Identidad institucional:** mantener una distinción visible entre reconstrucción informativa independiente y web oficial; no presentar la reconstrucción como canal oficial de reservas o donaciones.

## Orden de ejecución recomendado

1. **P0 — integridad:** verificar todas las rutas generadas por `src/content/mirror`, enlaces rotos, errores de build y despliegue.
2. **P1 — conversión y ayuda:** páginas de donaciones, necesidades actuales, apadrinamiento, voluntariado, Teaming, lista de deseos y campañas.
3. **P1 — visitas:** visitas guiadas, primaria, secundaria/bachillerato, infantil, universidades, talleres y campamentos.
4. **P2 — animales:** grupos Gombe, Manuela y Sammy; Lu y perfiles individuales, usando solo material confirmado.
5. **P2 — formación:** cursos de primatología, veterinaria, prácticas, ofertas y cursos archivados.
6. **P3 — noticias/medios:** índice con fechas y artículos, archivos y medios.
7. **P3 — calidad final:** imágenes autorizadas, SEO, accesibilidad, idioma inglés y revisión visual móvil/escritorio.

## Checklist de verificación

- [ ] Comparar cada URL canónica oficial con la ruta local y marcar: completa, parcial, externa o ausente.
- [ ] Comprobar si cada página heredada en `src/content/mirror` se genera realmente en el build.
- [ ] Probar enlaces internos y externos.
- [ ] Confirmar las condiciones vigentes de visitas, cursos y donaciones.
- [ ] Auditar fuentes y permisos de imágenes.
- [ ] Confirmar que formularios y CTA describen con exactitud lo que ocurre.
- [ ] Ejecutar build y revisar el despliegue de GitHub Pages.

## Referencias oficiales para verificación manual

- https://rainfer.org/
- https://rainfer.org/que-hacemos/
- https://rainfer.org/visitanos/
- https://rainfer.org/visitanos/visitas-guiadas/
- https://rainfer.org/visitanos/visitas-colegios/
- https://rainfer.org/visitanos/visitas-guiadas-ed-secundaria/
- https://rainfer.org/talleres-tematicos/
- https://rainfer.org/cursos/
- https://rainfer.org/que-puedes-hacer-tu/
- https://rainfer.org/que-puedes-hacer-tu/donaciones/
- https://rainfer.org/que-puedes-hacer-tu/donaciones/necesidades-actuales/
- https://rainfer.org/que-hacemos/formacion-y-educacion/cursos-de-veterinaria/
