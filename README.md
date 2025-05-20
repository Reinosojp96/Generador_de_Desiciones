Toma de decisiones aleatorias.

Un proyecto es una aplicación web sencilla que permite al usuario gestionar opciones personalizadas y generar decisiones aleatorias. Incluye compatibilidad con modos claro y oscuro, opciones guardadas en el navegador (Almacenamiento local) y un efecto visual de "dominación" al tomar decisiones.

Características

Añadir, editar y eliminar opciones personalizadas.

Decisiones aleatorias con efectos visuales.

Modos claro y oscuro conmutables.

Persistencia de datos en almacenamiento local.

Diseño responsivo y elegante con HTML5, CSS3 y JavaScript.

Panel de fondo con repetición de vídeo.

Estructura de archivos

Project decisions/
├── index.html # El archivo HTML principal.
├── style.css # Estilos CSS externos.
├── script.js # Lógica de Java Script
└── background.mp4 # Vídeo de fondo (reemplazar según sea necesario).

required་.

Navegadores modernos compatibles con HTML5 y ES6.

Servidor web estático (opcional para pruebas locales, p. ej., VSCode Live Server).

Instalación y funcionamiento.

Clonar el repositorio.

git clone https://github.com/Reinosojp96/Generador_de_Desiciones.git

Abrir el directorio del proyecto.

cd project-decision.

(Opcional) Iniciar un servidor web local.

npx live-server

Abrir index.html en el navegador.

ejecutar.

Introducir una nueva opción en el campo de texto y hacer clic en "Añadir".

Mostrar una lista de opciones con el botón "Mostrar lista" para editar o eliminar entradas.

Generar una decisión aleatoria con el botón "Generar decisión".

Alternar entre modo claro y oscuro con el botón superior.

Personalización.

Vídeo de fondo: Reemplazar background.mp4 con el archivo deseado.

DefaultOptions: Modificar la matriz defaultOptions en script.js.

Estilos: Ajusta las variables y categorías en style.css.

pass་.

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Creado por Julián Reynoso.
