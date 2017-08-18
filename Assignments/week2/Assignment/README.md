# Asignación de la Semana 1

Construir una página simple basada en HTML 5 y CSS 3.

## Planeación de la página

La página a construir deberá contar con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week1-img/siteplan.png" width="400" />

**Nota: La imagen solo muestra las secciones mas representativas.**

## HTML a utilizar

Se deberá almacenar en un archivo con nombre y extensión: `index.html`.

### Doctype, Html, Head, Title y Body

La estructura de la página deberá estar compuesta por estos 5 elementos (los elementos aquí descritros no son parte de la imagen anterior donde se describe la planeación de la página, a excepción del `body`) :

```html
<!doctype html>
<html>
  
  <head>
    <title> Título de la página </title>
  </head>

  <body>

    <!-- Comentario: El contenido que se muestra en el navegador
    se encuentra dentro del body.
    A esta altura, en el body, se construirá la estructura de la planeación de la página -->

  </body>

</html>
```

### Header

El `header` contendrá un elemento `hgroup` para agrupar los diferentes niveles de títulos.

*Nota: No confundir `header` con el `head` indicado en los elementos anteriores*

```html
<body>

 <header>
			<hgroup>
				<h1>Título principal</h1>
				<h2>Subtítulo</h2>
			</hgroup>
 </header>

</body>
```

### Navigation

El menú deberá estar compuesto por un elemento `nav` y una lista `ul` de html:

```html
<body>

<nav>
<ul>
	<li><a href="#">Inicio</a></li>
	<li><a href="#">Menu 1</a></li>
	<li><a href="#">Menu 2</a></li>
	<li><a href="#">Menu 3</a></li>
</ul>
</nav>

</body>
```

### Article y Section

Los elementos que componen el "contenido" de la página, estarán compuestos por un `article` y `section`:

```html
<nav>
	<!-- lista html -->
</nav>

<article>
 <header>
  <h1> Título del artículo completo </h1>
 </header>

 <p>
  Párrafo de ejemplo
 </p>

 <section>
  <header>
   <h1>Este es el encabezado de la primer sección</h1>
  </header>
  <p>
   Texto de la primer sección
  </p>
 </section>

 <section>

  <header>
   <h1>Segunda sección: "mark", "aside", botón e imagen</h1>
  </header>

  <p class="next-to-aside">
   <mark>La etiqueta mark subraya con amarillo cierto contenido</mark>
   <br /> <!-- salto de lnea -->
  </p>

  <aside>
   <p>Este es un aside que contiene...</p>
  </aside>

  <div>
   <button type="button" onClick="javascript:alert('Ejemplo de alert')">Botón 1</button>
  </div>

  <figure>
   <img src="logo.png" alt="Logo FCFM" width="200" height="100">
   <figcaption>Figura 1. Logo FCFM</figcaption>
  </figure>

 </section>

</article>
```

## CSS a utilizar

Se deberá almacenar en un archivo con nombre y extensión: `style.css`.

### Referencia en html

El archivo de `css` deberá estar referenciado en el `head` del archivo `index.html`

```html
<head>
	<link rel="stylesheet" href="style.css" />
</head>
```

### *, body, header

Se deben definir las generalidades del documento completo con el uso de `*`; en nuestro caso, solo establecemos la fuente. Entonces, debe continuarse con particularidades del `body` y elementos principales como los headers. 
```css
* {
	font-family: Lucida Sans, Arial, Helvetica, sans-serif;
}

body {
	width: 800px;
	margin: 0em auto;
}

header h1 {
	font-size: 50px;
	margin: 0px;
	color: #006;
}

header h2 {
	font-size: 15px;
	margin: 0px;
	color: #2541B2;
	font-style: italic;
}

```

### nav

Las listas en html, por defecto, se organizan de manera vertical. Debemos hacer uso de reglas como `display` y `clear` para tomen un aspecto visual horizontal. Además, para el trabajo de las viñetas, la regla `list-style` nos dá diferentes opciones.
```css
nav ul {
	list-style: none;
	padding: 5px;
	display: block;
	clear: right;
	background-color: #03256C;
	padding-left: 4px;
	height: 24px;
}
nav ul li {
	display: inline;
	padding: 5px 20px 10px 10px;
	border-right: 1px solid #fff;
	vertical-align: middle;
}

nav ul li a {
	color: #FFFFFF;
	text-decoration: none;
	font-size: 13px;
	font-weight: bold;
}

nav ul li a:hover {
	color: #fff;
}

```

### article

```css
article > header h1 {
	font-size: 40px;
	float: left;
	margin-left: 14px;
}

article > header h1 a {
	color: #000090;
	text-decoration: none;
}

article > section header h1 {
	font-size: 20px;
	margin-left: 25px;
}

article p {
	clear: both;
	margin-top: 0px;
	margin-left: 50px;
}

article p.next-to-aside {
	width: 500px;
}

article >  section figure {
	margin-left: 180px;
	margin-bottom: 30px;
}
```

### aside
```
aside p {
        position:relative;
        left:0px;
        top: -100px;
		z-index: 1;
        width: 200px;
    	float: right;
	    font-style: italic;
       	color: #73628A;
}
```

### footer

```
footer p {
	text-align: center;
	font-size: 12px;
	color: #888;
	margin-top: 24px;
}
```

## Mockup

La página deberá tener el siguiente aspecto visual:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week1-img/targetsite.png" />

Además, el botón deber contar con un evento `onClick`que ejecute un `alert` con un mensaje de ejemplo, como se muestra en la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week1-img/alertsite.png" width="400" />
