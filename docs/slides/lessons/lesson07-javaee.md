# Aplicaciones Web - JAVA EE
## Servlets

-==========-

## Servlets

Un Servlet es una clase de Java utilizada para extender las capacidades de los servidores que alojan las aplicaciones a las que se accede mediante un modelo de `request-repsonse`.

El paquete `javax.servlet.http` provee las interfaces y clases necesarias para escribir un `servlet`. Todos los servlets implementan la interfaz `Servlet` donde se define todo su ciclo de vida.

La clase `HttpServlet` provee métodos como `doGet()` y `doPost()` para el manejo de solicitudes `HTTP`.

-==========-

## Servlets

La clase abstracta `HttpServlet` provee herramientas para crear un servlet HTTP. Una subclase de `HttpServlet` debe sobre-escribir al menos alguno de los siguientes métodos:

- `doGet()`: Para peticiones `GET`
- `doPost()`: Para peticiones `POST`
- `doPut()`: Para peticiones `PUT`
- `doDelete()`: Para peticiones `DELETE`
- `init()` y `destroy()`: Administrar recursos durante el ciclo de vida del servlet
- `getServletInfo()`: Recupera información acerca del mismo servlet.

-==========-

## Servlets

La clase `HttpRequest` y `HttpResponse` proveen información sobre la petición y respuesta del servidor.

El contenedor del servlet es el encargado de construir objetos de ambos tipos para posteriormente enviarlos como argumento a los métodos de servicio del servlet (`doPost`, `doGet`, etc.)
