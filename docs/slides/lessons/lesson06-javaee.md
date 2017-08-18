# Aplicaciones Web
## Arquitectura

-==========-

## Web modules

Un módulo web es la unidad desplegable y utilizable más pequeña de los recursos web. Contiene los siguientes elementos:

- Web components
- Web resources
- Clases utilerías server-side
- Clases utilerías client-side

-==========-

## Web modules

Un módulo web tiene una estructura específica. El nivel mas alto es el documento raíz. En el documento raíz se encontrará un subdirectorio de nombre `WEB-INF`, el cual contiene los siguientes archivos y directorios:

- `classes`: Server-side classes (servlets, JavaBean classes y utility classes)
- `lib`: Directorio que contiene archivos `JAR`
- Descriptores de despliegue: web.xml y ejb-jar.xml

-==========-

## Estructura Web Module

<div class="image">
  <img class="no-border" data-src="img/06-01.png"/>
</div>
