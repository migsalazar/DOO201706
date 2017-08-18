# Diseño Orientado a Objetos
## Introducción a las Aplicaciones Web

-==========-

<div class="image">
  <img class="no-border" data-src="img/05-01.png"/>
</div>

-==========-

## Protocolo Http

Protocolo de transferencia de hipertexto, es un tipo de protocolo de aplicación que permite y regula la comunicación entre sistemas distribuidos, de colaboración y de información hipermedia.

Es el protocolo base para la comunicación de datos en la W3.

-==========-

## Http Request

Una petición http, es un mensaje que el cliente puede enviar al servidor. El request hacia un servidor vía http, esta formado por las siguientes partes:

- Método a aplicar en el recurso
- Identificador del recurso
- Versión del protocolo en uso

-==========-

## Http Request

```
Request = Request-Line
	        *(( general-header
	         | request-header
	         | entity-header ) CRLF)
	        CRLF
	        [ message-body ]
```

-==========-

### Línea de petición

La línea de petición inicia con un la firma del método, seguido de la URI, de la versión del protocolo y finalizando con CRLF.

`Request-Line   = Method SP Request-URI SP HTTP-Version CRLF`

-==========-

### Método

La firma del método indica el método o acción que debe ser ejecutada. La cual está identificada por la URI.

```
Method  = "OPTIONS"
			 | "GET"
			 | "HEAD"
			 | "POST"
			 | "PUT"
			 | "DELETE"
			 | "TRACE"
			 | "CONNECT"
			 | extension-method
extension-method = token
```
-==========-

### Request URI

Uniform Resource Identifier, identifica el recurso al cual queremos aplicar la petición.

`Request-URI    = "*" | absoluteURI | abs_path | authority`

-==========-

### Ejemplo Http Request

`GET http://www.dominio.com/index.html HTTP/1.1`
