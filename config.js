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
            title: 'La recuperación del lince ibérico',
            description: `
            <p>A comienzos del siglo XXI, el lince ibérico estaba al borde de la extinción. Quedaban menos de 100 ejemplares en libertad, confinados a pequeños núcleos aislados en el sur de España.</p>
            <p>Gracias a un esfuerzo conjunto de conservación, hoy la especie muestra una notable recuperación.</p>
            <p>Este mapa interactivo cuenta la historia de ese regreso: dónde vive hoy el lince ibérico, cómo ha evolucionado su población y qué desafíos enfrenta.</p>
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
                center: [-1.23672, 40.61865],
                zoom: 6,
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
            title: 'De menos de 100 a más de 2.000',
            description: `
              <p>En 2002, se estimaba que quedaban menos de 100 linces ibéricos en libertad.</p>
              <p>Desde entonces, la población no ha dejado de crecer, superando los 2.000 ejemplares en 2023.</p>
              <p>Esta recuperación ha sido posible gracias a la protección del hábitat, la cría en cautividad, la liberación de ejemplares y el trabajo coordinado entre administraciones, científicos y ONG.</p>
              <p>La siguiente infografía muestra cómo ha evolucionado el número total de linces en la península ibérica en las últimas dos décadas.</p>
             <div style="position: relative; padding-top: 56.25%; height: 0; overflow: hidden;">
              <iframe src="https://public.flourish.studio/visualisation/22735413/embed"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
              </iframe>
              </div>
            `,
            location: {
              center: [-1.23672, 40.61865],
              zoom: 6,
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
              <p>A comienzos de siglo, <strong>Andalucía</strong> era el único lugar donde sobrevivía el lince ibérico en libertad.</p>
              <p>Núcleos como <strong>Doñana-Aljarafe</strong> y <strong>Sierra Morena</strong> fueron esenciales para su conservación inicial.</p>
              <p>Gracias a los programas de cría y reintroducción, hoy esta comunidad acoge más de 750 ejemplares distribuidos en varios núcleos reproductores.</p>
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
            title: 'Castilla-La Mancha: consolidación del crecimiento',
            description: `
              <p>Desde 2014, <strong>Castilla-La Mancha</strong> se ha convertido en una de las regiones clave para la expansión del lince.</p>
              <p>Con núcleos importantes en los <strong>Montes de Toledo</strong> y <strong>Sierra Morena Oriental y Occidental</strong>, la comunidad alberga más de 700 ejemplares en 2023.</p>
              <p>Su entorno ha demostrado ser especialmente favorable para la reproducción.</p>
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
              <p><strong>Extremadura</strong> desempeña un papel estratégico como puente natural entre Andalucía y Castilla-La Mancha.</p>
              <p>Aquí se han consolidado núcleos como <strong>Matachel</strong>, <strong>Ortiga</strong> o <strong>Valdecigüeñas</strong>, con más de 250 linces censados.</p>
              <p>También han surgido nuevas áreas de expansión como <strong>Cornalvo</strong> y <strong>Sotillo</strong>.</p>
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
              <p>El núcleo portugués de <strong>Vale do Guadiana</strong> alberga más de 290 linces y ha sido clave en la recuperación de la especie a escala peninsular.</p>
              <p>Portugal ha desarrollado un modelo de reintroducción exitoso y coordinado con España, convirtiéndose en un referente de colaboración internacional para la conservación del lince ibérico.</p>
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
            title: 'Murcia: una nueva frontera para el lince',
            description: `
              <p>En 2023 se reintrodujeron siete linces ibéricos en la Región de Murcia, en una zona próxima a <strong>Lorca</strong>.</p>
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
            <p>La recuperación del lince ibérico es uno de los mayores logros de conservación en Europa: de menos de 100 ejemplares a más de 2.000 en apenas dos décadas.</p>
            <p>Este avance ha sido posible gracias a la colaboración entre administraciones públicas, científicos, ONG y ciudadanía.</p>
            <p>Pero el camino no ha terminado. Las principales amenazas siguen siendo los atropellos, la pérdida de conectividad entre territorios y la fragmentación del hábitat.</p>
            <p>Contarlo y visualizarlo también forma parte de su protección.</p>
            
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
              zoom: 6,
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
