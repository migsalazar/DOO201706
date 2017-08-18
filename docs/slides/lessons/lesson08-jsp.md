# Aplicaciones Web - JAVA EE
## JSP

-==========-

## JSP

Java Server Pages es un tipo de tecnoogía del entorno JAVA para crear páginas web dinámicas basadas en `HTML` y tipos de documentos similares.

Originalmente fué liberado por Sun Microsystems en 1999.

JSP es similar a PHP, ASP, etc.

-==========-

## JSP

Una página de JSP es un documento de texto que contiene dos tipos de texto: datos estáticos, que puede ser expresado en cualquier tipo de formato (HTML, SVG, WML y XML), y elementos JSP, los cuales construyen contenido dinámico.

La extensión utilizada para este tipo de documentos es `.jsp`.

Un archivo de JSP puede expresarse con una combinación de dos tipos de sitaxis: expresiones estándar de JSP y XML (Ambos acompañados de HTML).

-==========-

## Ventajas de JSP

Contra ASP: La parte dinámica es escrita en Java, no VB o C#; esto otorga ventajas propias del lenguaje. Además, dado que trabaja sobre la JVM, es portable.

Contra servlets: Es más fácil de escribir y de modificar. Es poco reutilizable escribir código HTML del lado del Servlet con expresiones `println`.

Contra HTML estático: HTML regular, obviamente, no puede generar contenido dinámico proveniente del servidor.

-==========-

## Scriptlet

La sintaxis básica para construir script dentro de un documento de `jsp` es la siguiente:

```java
<% code fragment %>
```

-==========-

## XML

Además, podemos variar con el equivalente en XML.

```java
<jsp:scriptlet>
   code fragment
</jsp:scriptlet>
```

-==========-

## Ejemplo

```html
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head><title>Hello World</title></head>
	<body>
		Hello World!<br/>
		<%
			out.println("Tu dirección IP es: " + request.getRemoteAddr());
		%>
	</body>
</html>
```

-==========-

## Ejemplo

<div class="image">
  <img class="no-border" data-src="img/08-01.png"/>
</div>

-==========-

## Declaraciones

```java
<%! int i = 0; %>
<%! int a, b, c; %>
<%! Person p = new Person("Fake", "Name"); %>
```

-==========-

## Expresiones

```html
<html>
	<head><title>Título</title></head>
	<body>
		<p>
		   Hoy es: <%= new java.util.Date().toLocaleString()   %>
		</p>
	</body>
</html>
```

Resultado: `Hoy es: Feb 15, 2017 3:25:07 AM`

-==========-

## Comentarios

```html
<%-- Este es un comentario de JSP --%>
```

-==========-

## Directivas

- `<%@ page ... %>`: Define los atributos dependientes de la página, como el lenguaje de secuencias de comandos, la página de errores y los requisitos de almacenamiento en memoria intermedia.
- `<%@ include ... %>`: Referencia archivos durante la etapa de traducción.
- `<%@ taglib ... %>`:	Declara una librería que puede contener acciones personalizadas para utilizar en la página.

-==========-

## Acciones de JSP

Las acciones de JSP utilizan el constructor en sintaxin de XML para controlar el comportamiento del motor de un servlet. Se puede insertar dinámicamente un archivo, reutilizar componentes, redireccionar hacia otra página o genera un plugin de HTML.

```java
<jsp:action_name attribute="value" />
```

-==========-

## Acciones de JSP

- `jsp:include`: Incluye un archivo en el momento en que se realiza la petición.
- `jsp:useBean`: Busca o instancia un JavaBean.
- `jsp:setProperty`: Establece una propiedad de un JavaBean.
- `jsp:getProperty`: Obtiene la propiedad de un JavaBean.
- `jsp:forward`. Redirecciona la petición a una nueva página.

-==========-

## Acciones de JSP

- `jsp:plugin`: Genera codigo específico para el navegador que produce una etiqueta `OBJECT` o `EMBED` para un plugin de Java.
- `jsp:element`: Define elementos XML dinámicamente.
- `jsp:attribute`: Define atributs de un elemento XML.
- `jsp:body`: Define dinámicamente un elemento body.
- `jsp:text`: Se utiliza para escribir una plantilla de texto en páginas de JSP.

-==========-

## Objetos implícitos en JSP

JSP define un nueve variables de manera automática que están disponibles para su uso.

- `request`: Objeto de tipo HttpServletRequest asociado con la petición en cuestión.
- `response`: Objeto de tipo HttpServletResponse asociado con la respuesta en cuestión.
- `out`: Objeto PrintWriter para imprimir en la respuesta del cliente.
- `session`: Objeto de tipo HttpSession asociado con la petición del cliente.
- `application`: Objeto de tipo ServletContext asociado con el contexto de la aplicación.


-==========-

## Objetos implícitos en JSP

JSP define un nueve variables de manera automática que están disponibles para su uso.

- `config`: Objeto de tipo ServletConfig asociado con la página.
- `pageContext`: Este objeto encapsula funcionalidades específicas del servidor como JspWriters.
- `page`: Alias o sinónimo del objeto `this`. Se utiliza para invocar métodos en el servlet.
- `Exception`: Objeto de tipo Exception para proveer funcionalidad de datos de excepción.

-==========-

## Flujo de control

JSP provee funcionalidad completa de Java. Por lo cual se pueden construir bloques de código de Java dentro de un JSP.

-==========-

## JSP If-Else

```html
<html>
<head>
    <title>Ejemplo if-else</title></head>
<body>
<%! int day = 6; %>

<% if (day == 6) { %>
      <p> Es viernes y el cuerpo lo sabe </p>
<% } else { %>
      <p> No es Viernes, pero quizá es sábado.</p>
<% } %>

</body>
</html>

```

-==========-

## JSP If-Else

<div class="image">
  <img class="no-border" data-src="img/08-02.png"/>
</div>

-==========-

## JSP Ciclos

```html
<%! int fontSize; %>
<html>
<head><title>Ejemplo de ciclo</title></head>
<body>
<%for ( fontSize = 1; fontSize <= 5; fontSize++){ %>

    <label style="font-size: <%= fontSize %>em;">
        Ya es Viernes!
    </label>

   <br />
<%}%>
</body>
</html>
```

-==========-

## JSP Ciclos

<div class="image">
  <img class="no-border" data-src="img/08-03.png"/>
</div>


-==========-

## Operadores

JSP soporta todos los operadores lógicos y matemáticos de Java.

- `()`, `[]`,  `.`
- `++` `--` `!`
- `*`, `/`, `%`
- `+`, `-`
- `>`, `>=`, `<`, `<=`
- `==`, `!=`
- `&&`
- `||`
- `?:`
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`

-==========-

## JSP Literales

Las expresiones de JSP definen los siguientes literales:

- Boolean
- Integer
- Floating point
- String
- Null
