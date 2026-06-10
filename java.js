// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Obtención de elementos del DOM
    const formulario = document.getElementById("formulario-ovni");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const seccionResultado = document.getElementById("seccion-resultado");
    const resultadoTexto = document.getElementById("resultado-texto");
    const resultadoPuntos = document.getElementById("resultado-puntos");
    const resultadoRecomendacion = document.getElementById("resultado-recomendacion");

    // Evento del envío del formulario
    formulario.addEventListener("submit", (evento) => {
        // Evitar que la página se recargue automáticamente
        evento.preventDefault();

        // 1. Captura y lectura de datos del formulario
        const nombre = document.getElementById("nombre-reporte").value.trim();
        const lugar = document.getElementById("lugar-avistamiento").value.trim();
        const testigos = parseInt(document.getElementById("cantidad-testigos").value, 10);
        const video = document.getElementById("tiene-video").value;
        const imagen = document.getElementById("tiene-imagen").value;
        const radar = document.getElementById("tiene-radar").value;
        const explicacion = document.getElementById("explicacion-cientifica").value;
        const descripcion = document.getElementById("descripcion").value.trim();

        // 2. Validación básica para verificar que no haya campos vacíos
        if (!nombre || !lugar || isNaN(testigos) || !video || !imagen || !radar || !explicacion || !descripcion) {
            alert("Por favor, complete todos los campos obligatorios antes de continuar.");
            return;
        }

        // 3. Cálculo del puntaje según los criterios de la tabla de examen
        let puntajeTotal = 0;

        if (video === "si") puntajeTotal += 3;
        if (imagen === "si") puntajeTotal += 2;
        if (radar === "si") puntajeTotal += 4;
        if (testigos > 3) puntajeTotal += 2;
        if (explicacion === "no") puntajeTotal += 3; // "No tiene explicación científica clara" otorga 3 pts

        // 4. Determinar la clasificación y el estilo dinámico
        let clasificacion = "";
        let claseEstilo = "";
        let recomendacion = "";

        if (puntajeTotal >= 0 && puntajeTotal <= 4) {
            clasificacion = "EVIDENCIA DÉBIL";
            claseEstilo = "evidencia-debil";
            recomendacion = "Recomendación: Archivar el caso temporalmente o desestimar por falta de pruebas concluyentes.";
        } else if (puntajeTotal >= 5 && puntajeTotal <= 8) {
            clasificacion = "EVIDENCIA MODERADA";
            claseEstilo = "evidencia-moderada";
            recomendacion = "Recomendación: Asignar un equipo de campo secundario para recolectar testimonios adicionales.";
        } else if (puntajeTotal >= 9) {
            clasificacion = "EVIDENCIA FUERTE";
            claseEstilo = "evidencia-fuerte";
            recomendacion = "Recomendación: ELEVAR AL DEPARTAMENTO DE DEFENSA INMEDIATAMENTE. Alto impacto de seguridad nacional.";
        }

        // 5. Modificar el DOM de manera dinámica para mostrar los resultados
        resultadoTexto.innerHTML = `<strong>Expediente:</strong> ${nombre}<br><strong>Clasificación:</strong> ${clasificacion}`;
        resultadoPuntos.textContent = `Puntaje de confiabilidad obtenido: ${puntajeTotal} puntos.`;
        resultadoRecomendacion.textContent = recomendacion;

        // Limpiar estilos previos en la tarjeta de resultados y aplicar el nuevo
        seccionResultado.className = "card " + claseEstilo;
    });

    // Evento para el botón de reiniciar el formulario
    btnReiniciar.addEventListener("click", () => {
        // Reinicia todos los inputs del formulario nativamente
        formulario.reset();
        
        // Ocultar de nuevo la sección de resultados
        seccionResultado.className = "card hidden";
    });
});