# Aplicaciones Web - JAVA EE
## Sesiones

-==========-

## Sesiones

`HTTP` es un protocolo `stateless`, lo cual significa que cada vez que se produce una petición el cliente abre una nueva *conexión* con el servidor web y el servidor no sabe nada acerca de lo sucedido en el cliente.

-==========-

## Sesiones

Existen cuatro maneras para mantener una continua comunicación entre el cliente y el servidor:

- Hidden fields
- URL Data
- Cookies
- Session objects

-==========-

## Sesiones

En Java, los `JSP` utilizan instancias que provee el servlet para el manejo de sesiones.

La interfaz `HTTPSession` provee funcionalidad para identificar el usuario que interactua con la aplicación web.

Por defecto, JSP tiene activado el registro de sesiones y un objeto `HttpSession` implícito activo en cada petición generada por el usuario. Dado que el objeto `session` se encuentra implícito, el desarrollador puede almacenar y recuperar información desde el objeto sin alguna inicialización.

-==========-

## Sesiones

Para desactivar el registro de sesión, se requiere que explícitamente se *apague* una configuración en la directiva de la página:

```java
<%@ page session="false" %>
```

-==========-

## Sesiones - Métodos

Los siguientes, es un resumen de métodos importantes para el manejo de sesiones:

- `Object getAttribute(String name)`
- `Enumeration getAttributeNames()`
- `long getCreationTime()`
- `String getId()`
- `long getLastAccessedTime()`
- `int getMaxInactiveInterval()`

-==========-

## Sesiones - Métodos

Los siguientes, es un resumen de métodos importantes para el manejo de sesiones:

- `void invalidate()`
- `boolean isNew()`
- `removeAttribute(String name)`
- `void setAttribute(String name, Object value)`
- `void setMaxInactiveInterval(int interval)`

-==========-

## Sesiones - Ejemplo

```html
<%@page contentType="text/html" pageEncoding="UTF-8" import="java.io.*,java.util.*"%>
<%
   Date createTime = new Date(session.getCreationTime());
   Date lastAccessTime = new Date(session.getLastAccessedTime());

   String title = "";
   int visitCount = 0;

   if (session.isNew()){
      title = "Bienvenido";
      session.setAttribute("count",  visitCount + 1);
   }
   else {
       title = "Bienvenido de nuevo";

       visitCount = (Integer)session.getAttribute("count");

       visitCount = visitCount + 1;

       session.setAttribute("count", visitCount);
   }
%>
```

-==========-

## Sesiones - Ejemplo

```html
<center>
    <h1>Registro de sesión</h1>

    <h2><% out.print( title ); %></h2>
</center>
<table>
    <tr>
       <td>id</td>
       <td><% out.print( session.getId()); %></td>
    </tr>
    <tr>
       <td>Fecha de creación</td>
       <td><% out.print(createTime); %></td>
    </tr>
    <tr>
       <td>Ultimo acceso</td>
       <td><% out.print(lastAccessTime); %></td>
    </tr>
    <tr>
       <td>Número de visitas</td>
       <td><% out.print(visitCount); %></td>
    </tr>
</table>
```

-==========-

<div class="image">
  <img class="no-border" data-src="img/10-01.png"/>
</div>

-==========-

<div class="image">
  <img class="no-border" data-src="img/10-02.png"/>
</div>
