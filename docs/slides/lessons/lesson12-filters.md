# Aplicaciones Web - JAVA EE
## Filters

-==========-

## Filtros

Los filtros de Servlets y JSP son clases de Java que pueden ser utilizados con los siguientes objetivos:

- Interceptar peticiones del cliente antes de acceder al back-end.
- Manipular la respuesta del servidor antes de ser enviada al cliente.

-==========-

## Filtros

Existen varios tipos de filtros:

- Filtros de Autenticación.
- Compresión de datos.
- Filtros de encriptación.
- Filtros que se ejecutan en base al acceso a un recurso.

-==========-

## Filtros

Existen varios tipos de filtros:

- Filtros de conversión de imagenes.
- Filtros de logging y para auditar.
- Filtros de cadenas de tipos MIME.
- Filtros Tokenizing.
- Filtros XSL/T para transformar contenido XML.

-==========-

## Filtros

Los filtros son definidos en el archivo web.xml. Cuando el contenedor de JSP inicia la aplicación web, se crea una instancia para cada filtro que se haya declarado y se ejecutan en el orden declarado.

-==========-

## Métodos

Un filtro es una clase de Java simple que implementa la interfaz `javax.servlet.Filter`. Esta interfaz define tres métodos:

- `void doFilter (ServletRequest, ServletResponse, FilterChain)`
- `void init(FilterConfig filterConfig)`
- `void destroy()`

-==========-

## Ejemplo

```java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

public class LogFilter implements Filter  {

   public void init(FilterConfig config) throws ServletException {

      String testParam = config.getInitParameter("test");

      System.out.println("Parámetro de prueba: " + testParam);
   }

   public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)  throws java.io.IOException, ServletException {

      String ipAddress = request.getRemoteAddr();

      System.out.println("IP "+ ipAddress);

      chain.doFilter(request,response);
   }

   public void destroy() {
      //Se ejecuta antes de que el contenedor web destruya la instancia
   }
}
```


-==========-

## Ejemplo en web.xml

```xml
<filter>
   <filter-name>LogFilter</filter-name>
   <filter-class>LogFilter</filter-class>
   <init-param>
	  <param-name>test</param-name>
	  <param-value>Parámetro de inicialización</param-value>
   </init-param>
</filter>
<filter-mapping>
   <filter-name>LogFilter</filter-name>
   <url-pattern>/*</url-pattern>
</filter-mapping>
```

-==========-

<div class="image">
  <img class="no-border" data-src="img/12-01.png"/>
</div>
