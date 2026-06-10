document.addEventListener("DOMContentLoaded", () => {
   
    const formulario = document.getElementById("formulario-ovni");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const seccionResultado = document.getElementById("seccion-resultado");
    const resultadoTexto = document.getElementById("resultado-texto");
    const resultadoPuntos = document.getElementById("resultado-puntos");
    const resultadoRecomendacion = document.getElementById("resultado-recomendacion");
  
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
     
        const nombre = document.getElementById("nombre-reporte").value.trim();
        const lugar = document.getElementById("lugar-avistamiento").value.trim();
        const testigos = parseInt(document.getElementById("cantidad-testigos").value, 10);
        const video = document.getElementById("tiene-video").value;
        const imagen = document.getElementById("tiene-imagen").value;
        const radar = document.getElementById("tiene-radar").value;
        const explicacion = document.getElementById("explicacion-cientifica").value;
        const descripcion = document.getElementById("descripcion").value.trim();

        
        if (!nombre || !lugar || isNaN(testigos) || !video || !imagen || !radar || !explicacion || !descripcion) {
            alert("Por favor, complete todos los campos obligatorios antes de continuar.");
            return;
        }

        let puntajeTotal = 0;

        if (video === "si") puntajeTotal += 3;
        if (imagen === "si") puntajeTotal += 2;
        if (radar === "si") puntajeTotal += 4;
        if (testigos > 3) puntajeTotal += 2;
        if (explicacion === "no") puntajeTotal += 3; 

    
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

        resultadoTexto.innerHTML = `<strong>Expediente:</strong> ${nombre}<br><strong>Clasificación:</strong> ${clasificacion}`;
        resultadoPuntos.textContent = `Puntaje de confiabilidad obtenido: ${puntajeTotal} puntos.`;
        resultadoRecomendacion.textContent = recomendacion;

        seccionResultado.className = "card " + claseEstilo;
    });

    btnReiniciar.addEventListener("click", () => {
        // Reinicia todos los inputs del formulario nativamente
        formulario.reset();
        
        // Ocultar de nuevo la sección de resultados
        seccionResultado.className = "card hidden";
    });
});
