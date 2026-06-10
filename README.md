# Mi Proyecto del Recuperatorio - Clasificador OVNI 👽

Aqui esta mi proyecto para el examen recuperatorio de Programación Web I. La idea es hacer una página web que sirva como una especie de archivo o simulador digital para registrar reportes de OVNIs o FANI (Fenómenos Aéreos No Identificados) y ver qué tan reales o confiables son las pruebas que la gente sube.

## ¿Qué hace la página?
- **Tiene un formulario completo:** Pide cosas básicas como el nombre del caso, el lugar donde pasó, cuánta gente lo vio y si hay fotos, videos o registros de radar.
- **Saca un puntaje automático:** Programé una lógica en JavaScript que va sumando puntos según las opciones que marques en el formulario (por ejemplo, si tiene video o radar suma más puntos). Al final te dice si la evidencia es débil, moderada o fuerte.
- **Cambia de color según el resultado:** Usando el DOM logré que la tarjeta de resultados cambie de color (rojo si es floja, verde si es muy real) y te dé una recomendación de qué hacer con el expediente sin necesidad de que la página se ande recargando.

## Tecnologías que usé 
- **HTML5:** Usé etiquetas ordenadas para separar las partes de la página como el `header`, `nav`, `main`, `section` y `footer`.
- **CSS3:** Todo el diseño visual, los colores morados y verdes estilo alien, y los bordes limpios los hice en un archivo aparte. También le metí media queries para que si lo abres en el celular no se rompa nada y los botones se acomoden bien para poder tocarlos.
- **JavaScript:** Con esto capturo lo que el usuario escribe, valido que no dejen cosas vacías (te salta una alerta si te falta algo) y hago las sumas matemáticas para cambiar el texto y los estilos en la pantalla.

## Cómo ordené mis carpetas
Me aseguré de dejar todo separado y limpio como se pedía en la consigna:

```text
proyecto-recuperatorio-ovni/
│
├── index.html         <-- Mi página principal con el formulario
├── README.md          <-- Este archivo explicativo
├── css/
│   └── estilos.css    <-- Todos los diseños, colores morados/verdes y lo del celular
└── js/
    └── script.js      <-- La lógica de los puntos, las alertas y el DOM
