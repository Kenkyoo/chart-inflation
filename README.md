Argentina Inflation Chart

Este proyecto muestra la inflación de Argentina en los últimos 12 meses mediante un gráfico interactivo que puedes personalizar para visualizar diferentes tipos de gráficos.
Características

    Gráficos interactivos: Línea, barras y gráfico de histograma utilizando Plotly.js.
    API de inflación: Datos obtenidos de Argentina Datos.
    Estilo minimalista: Diseñado con Milligram.
    Despliegue en la nube: Aplicación hospedada en Vercel.

Tecnologías utilizadas

    Backend:
        Express: Servidor Node.js.
        Axios: Cliente HTTP para obtener datos de la API.

    Frontend:
        Plotly.js: Librería de gráficos.
        Milligram: Framework CSS ligero.
        jQuery: Para manejo de eventos.
        Webpack: Empaquetador de módulos.

    Despliegue:
        Vercel para el frontend.
        Render para el servidor.

Despliegue en producción

    Servidor: El servidor de la API está desplegado en Render.
    Frontend: El cliente está disponible en chart-inflation.vercel.app.

Uso

    Accede a la aplicación en Vercel.
    Selecciona el tipo de gráfico que deseas (línea, barra o histograma).
    Visualiza los datos de inflación interactivos.

Archivos principales

    Backend: server.js
    Frontend:
        index.html: Estructura de la página.
        src/index.js: Lógica para obtener datos y eventos del usuario.
        src/chart.js: Generación de gráficos con Plotly.
        src/style.css: Estilos personalizados.

API utilizada

Los datos de inflación se obtienen de Argentina Datos.

    Endpoint utilizado:
    https://api.argentinadatos.com/v1/finanzas/indices/inflacion


        
