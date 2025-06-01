var config = {
    style: 'mapbox://styles/nataliamf/cm9rdaycw00dk01qs2pv954ih',
    accessToken: 'pk.eyJ1IjoibmF0YWxpYW1mIiwiYSI6ImNtOTFteDd5aDAyYjkyaXI0aWJ6M2I5anUifQ.ixzpv39s0a-gNWierYxC2A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'El regreso del lince ibérico',
    subtitle: 'Un recorrido por los territorios donde vuelve a habitar en libertad',
    footer: 'Proyecto creado por Natalia Muñoz Fernández usando <a href="https://github.com/mapbox/storytelling" target="_blank" style="color:#ffffff; text-decoration: underline;">Mapbox Storytelling</a> template y las siguientes fuentes de información y multimedia:<br>' +
    'Censos de linces e información: <a href="http://www.iberlince.eu/index.php/esp/documentos-esp/documentos-del-proyecto/informes-seminarios" target="_blank" style="color:#ffffff; text-decoration: underline;">Proyecto Iberlince</a> / ' +
    '<a href="https://www.miteco.gob.es/es/biodiversidad/temas/inventarios-nacionales/inventario-especies-terrestres/ieet_mamiferos.html" target="_blank" style="color:#ffffff; text-decoration: underline;">MITECO</a> / ' +
    '<a href="https://elpais.com/sociedad/2019/05/10/actualidad/1557496465_902593.html" target="_blank" style="color:#ffffff; text-decoration: underline;">El País (2019)</a><br>' +
    'Visualización: <a href="https://public.flourish.studio/visualisation/22735413/" target="_blank" style="color:#ffffff; text-decoration: underline;">Flourish</a> / ' +
    'Vídeos: <a href="https://www.youtube.com/watch?v=SBqsdd0xcdI" target="_blank" style="color:#ffffff; text-decoration: underline;">RTVE Noticias</a><br>' +
    'Favicon: Icono "Lynx" de <a href="https://thenounproject.com/creator/mte/" target="_blank" style="color:#ffffff; text-decoration: underline;">M. Turan Ercan</a>, disponible en ' +
    '<a href="https://thenounproject.com/icon/lynx-1396790/" target="_blank" style="color:#ffffff; text-decoration: underline;">The Noun Project</a>, con licencia CC BY 3.0',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Un superviviente extraordinario',
            description: `
            <p>El lince ibérico fue, durante años, el felino más amenazado del planeta. Desde la década de 1950 hasta principios de los 2000, su población en libertad no dejó de caer. La escasez de conejos, la persecución humana y la destrucción de su hábitat lo llevaron al borde de la extinción.</p>
            <p>Gracias al esfuerzo coordinado de programas de conservación, científicos y administraciones, su población se ha multiplicado por veinte en apenas dos décadas y según el último censo publicado en mayo de 2025, más de 2.400 linces viven en libertad, repartidos por varias regiones de la Península Ibérica.</p>
            <p><strong>Acompáñanos en este recorrido visual para conocer cómo ha evolucionado su población y dónde habita esta especie única en el mundo.</strong></p>
            <div style="position:relative;padding-top:56.25%;height:0;overflow:hidden;">
            <iframe src="https://fast.wistia.net/embed/iframe/6xuc8et3a4" 
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" 
            allowfullscreen></iframe>
            </div>
            <p style="text-align: right; font-size: 0.9em; margin-top: 6px;">Fuente: 
            <a href="https://www.youtube.com/watch?v=SBqsdd0xcdI" target="_blank" style="text-decoration: underline; color: #ffffff;">
            RTVE Noticias
            </a>
            </p>
          `,
            location: {
                center: [-4, 40],
                zoom: 5.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'linces-bubbles', opacity: 0 },
                { layer: 'linces-labels', opacity: 0 }
              ]
        },
        {
            id: 'evolucion',
            alignment: 'center',
            hidden: false,
            title: 'De menos de 100 a más de 2.400',
            description: `
              <p>En 2002, el lince ibérico estaba al borde de la desaparición: solo quedaban 94 ejemplares en libertad en Andalucía. Ese mismo año comenzó un proceso coordinado de conservación sin precedentes: proyectos LIFE, cría en cautividad, reintroducciones, restauración de hábitats y colaboración institucional.</p>
              <p>Gracias a ese esfuerzo, en los últimos años la población no ha dejado de crecer y de expandirse hacia nuevas zonas con condiciones adecuadas para su supervivencia. En 2024, ya son <strong>más de 2.400 linces</strong> los que habitan en libertad en España y Portugal.</p>
             <div style="position: relative; padding-top: 56.25%; height: 0; overflow: hidden;">
              <iframe src="https://public.flourish.studio/visualisation/22735413/embed"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
              </iframe>
              </div>
            `,
            location: {
              center: [-4, 40],
              zoom: 5.8,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              { layer: 'linces-bubbles', opacity: 0 },
              { layer: 'linces-labels', opacity: 0 }
            ]
          },
          {
            id: 'andalucia',
            alignment: 'left',
            hidden: false,
            title: 'Andalucía: el último refugio',
            description: `
              <p>A comienzos de siglo, <strong>Andalucía</strong> era el último refugio del lince ibérico. Los únicos ejemplares que sobrevivían en libertad habitaban en <strong>Doñana-Aljarafe</strong> y <strong>Sierra Morena</strong>.</p>
              <p>Desde aquí comenzó el proceso de recuperación: programas de cría en cautividad, liberaciones controladas y protección del hábitat.</p>
              <p>Actualmente, Andalucía alberga <strong>836 ejemplares</strong>, lo que la convierte en la segunda comunidad con mayor población.</p>
            `,
            location: {
              center: [-4.9, 37.75],
              zoom: 5.9,
              pitch: 25,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'linces-bubbles',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Andalucía', 1,
                  0.1
                ]
              },
              {
                layer: 'linces-labels',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Andalucía', 1,
                  0
                ]
              }
            ]
          },
          {
            id: 'clm',
            alignment: 'right',
            hidden: false,
            title: 'Castilla-La Mancha: el nuevo corazón del lince ibérico',
            description: `
              <p>Desde 2014, <strong>Castilla-La Mancha</strong> se ha convertido en una de las regiones clave para la expansión del lince ibérico.</p>
              <p>Con núcleos principales en los <strong>Montes de Toledo</strong> y <strong>Sierra Morena Oriental y Occidental</strong>, esta comunidad ofrece un entorno ideal para la especie.</p>
              <p>En solo una década, ha pasado de no tener presencia estable a albergar 942 ejemplares en 2024, superando por primera vez a Andalucía en población y consolidándose como la comunidad con mayor número de linces en libertad.</p>
            `,
            location: {
              center: [-3.7, 39.4],
              zoom: 6.5,
              pitch: 25,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'linces-bubbles',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Castilla-La Mancha', 1,
                  0.1
                ]
              },
              {
                layer: 'linces-labels',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Castilla-La Mancha', 1,
                  0
                ]
              }
            ]
          },
          {
            id: 'extremadura',
            alignment: 'left',
            hidden: false,
            title: 'Extremadura: conexión entre territorios',
            description: `
              <p><strong>Extremadura</strong> fue una de las primeras regiones elegidas para reintroducir linces nacidos en cautividad.</p>
              <p>El núcleo de <strong>Matachel</strong> se ha convertido en un referente del éxito de estos programas, con una población que ha crecido de forma constante en los últimos años.</p>
              <p>Hoy, la comunidad alberga más de 250 ejemplares y desempeña un papel esencial en la conexión entre los distintos núcleos de la península.</p>
            `,
            location: {
              center: [-6.1, 39],
              zoom: 7.5,
              pitch: 25,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'linces-bubbles',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Extremadura', 1,
                  0.1
                ]
              },
              {
                layer: 'linces-labels',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Extremadura', 1,
                  0
                ]
              }
            ]
          },
          {
            id: 'portugal',
            alignment: 'left',
            hidden: false,
            title: 'Portugal: recuperación transfronteriza',
            description: `
              <p>El núcleo portugués de <strong>Vale do Guadiana</strong> alberga más de 350 linces y ha sido clave en la recuperación de la especie a escala peninsular.</p>
              <p>Portugal ha desarrollado un exitoso modelo de reintroducción coordinado con España, convirtiéndose en un referente de colaboración internacional para la conservación de especies.</p>
            `,
            location: {
              center: [-7.65, 37.68],
              zoom: 8.5,
              pitch: 25,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'linces-bubbles',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Portugal', 1,
                  0.1
                ]
              },
              {
                layer: 'linces-labels',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Portugal', 1,
                  0
                ]
              }
            ]
          },
          {
            id: 'murcia',
            alignment: 'right',
            hidden: false,
            title: 'Murcia: un nuevo horizonte',
            description: `
              <p>En 2023 se reintrodujeron siete linces ibéricos en la Región de Murcia, en una zona próxima a <strong>Lorca</strong> y, un año después, su censo asciende a 15 ejemplares, aunque aún sin ninguna hembra reproductora.</p>
              <p>Esta reintroducción marca el inicio de la expansión del lince hacia el sureste peninsular, una región con hábitats adecuados pero hasta ahora sin presencia estable.</p>
            `,
            location: {
              center: [-1.69, 37.70],
              zoom: 9,
              pitch: 25,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'linces-bubbles',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Murcia', 1,
                  0.1
                ]
              },
              {
                layer: 'linces-labels',
                opacity: [
                  'match',
                  ['get', 'region'],
                  'Murcia', 1,
                  0
                ]
              }
            ]
          },
          {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Un éxito compartido, un futuro por proteger',
            description: `
            <p>El regreso del lince ibérico es una historia de éxito, pero también un recordatorio de todo lo que aún está en juego.</p>
            <p>En 2024, se registraron <strong>214 muertes</strong> de linces ibéricos en libertad. Más de dos terceras partes de ellas fueron provocadas por atropellos. A ellas se suman casos de enfermedades, disparos y otras amenazas provocadas en muchos casos por la acción humana.</p>
            <p>Su futuro sigue dependiendo de la conservación del hábitat, de la adecuación de infraestructuras y de la conciencia social. Porque recuperar una especie es solo el principio: mantenerla viva exige compromiso continuo y depende de todos nosotros.</p>          
            <div style="position:relative;padding-top:56.25%;height:0;overflow:hidden;">
              <iframe src="https://fast.wistia.net/embed/iframe/f4csomzzln" 
                      style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" 
                      allowfullscreen></iframe>
            </div>
            <p style="text-align: right; font-size: 0.9em; margin-top: 6px;">Fuente: 
              <a href="https://www.youtube.com/watch?v=SBqsdd0xcdI" target="_blank" 
                style="text-decoration: underline; color: #ffffff;">
                RTVE Noticias
              </a>
            </p>
          `,
            location: {
              center: [-4.5, 38.2],
              zoom: 5.8,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              { layer: 'linces-bubbles', opacity: 0.5 },
              { layer: 'linces-labels', opacity: 0 }
            ]
          }
    ]
};
