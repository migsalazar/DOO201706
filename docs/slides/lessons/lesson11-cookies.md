# Aplicaciones Web - JAVA EE
## Cookies

-==========-

## Cookies

Las `cookies` son archivos de texto almacenadas en la computadora cliente y se utilizan con distintos fines. `JSP` soporta el trabajo de `cookies` haciendo uso de la tecnología de los `servlets`.

-==========-

## Cookies

De manera general, se puede identificar el retorno de un usuario a la aplicación con los siguientes pasos:

- El usuario genera una petición hacia un sitio. Por ejemplo, iniciando sesión.
- El servidor valida el usuario, obtiene la información extra, almacena y envía un conjunto de cookies al navegador. Por ejemplo, nombre de usuario, email, edad, etc.
- El navegador almacena las cookies en la computadora cliente para su posterior uso.
- Cuando el usuario vuelve a realizar la petición al sitio web, el navegador envía las cookies al servidor y este último lo utiliza para identificar nuevamente al usuario.

-==========-

## Composición de las cookies

Las cookies generalmente son establecidas en el `header` de la petición `HTTP` aunque es posible establecer el valor de una cookie vía javascript.

-==========-

## Composición de las cookies

Se componen de un conjunto de pares `nombre=valor`. Además, una fecha de expiración, una ruta y un dominio.

<div class="image">
  <img class="no-border" data-src="img/11-01.png"/>
</div>

-==========-

## Métodos de Java

Los siguientes, son métodos para el trabajo de cookies en Java.

- `void setDomain(String pattern)`
- `String getDomain()`
- `void setMaxAge(int expiry)`
- `int getMaxAge()`
- `String getName()`
- `void setValue(String newValue)`

-==========-

## Métodos de Java

- `String getValue()`
- `void setPath(String uri)`
- `String getPath()`
- `void setSecure(boolean flag)`
- `void setComment(String purpose)`
- `String getComment()`

-==========-

## Ejemplo 1 - Crear cookies

-==========-

```java
<%
   Cookie firstName = new Cookie("first_name", request.getParameter("first_name"));
   Cookie lastName = new Cookie("last_name", request.getParameter("last_name"));

   firstName.setDomain("localhost");
   lastName.setDomain("localhost");

   firstName.setMaxAge(60*60*24);
   lastName.setMaxAge(60*60*24);

   response.addCookie( firstName );
   response.addCookie( lastName );
%>
```

-==========-

```html
<body>
        <center>
        <h1>Setting Cookies</h1>
        </center>
        <ul>
        <li><p><b>First Name:</b>
           <%= request.getParameter("first_name")%>
        </p></li>
        <li><p><b>Last  Name:</b>
           <%= request.getParameter("last_name")%>
        </p></li>
        </ul>
    </body>
```

-==========-

<div class="image">
  <img class="no-border" data-src="img/11-02.png"/>
</div>

-==========-

<div class="image">
  <img class="no-border" data-src="img/11-03.png"/>
</div>

-==========-

<div class="image">
  <img class="no-border" data-src="img/11-04.png"/>
</div>

-==========-

## Ejemplo 2 - Leer cookies

-==========-

```java
<body>
	<h1>Reading Cookies</h1>
	<%
	   Cookie cookie = null;

	   Cookie[] cookies = null;

	   cookies = request.getCookies(); // Obtiene un arreglo de cookies asociado al dominio

	   if( cookies != null ) {

		  out.println("<h2> Cookies encontradas</h2>");

	      for (int i = 0; i < cookies.length; i++){
	         cookie = cookies[i];
	         out.print("Name : " + cookie.getName( ) + ",  ");
	         out.print("Value: " + cookie.getValue( )+" <br/>");
	      }
	  }
	  else{
	      out.println("<h2>No se encontraron cookies/h2>");
	  }
	%>
</body>
```

-==========-

<div class="image">
  <img class="no-border" data-src="img/11-05.png"/>
</div>
