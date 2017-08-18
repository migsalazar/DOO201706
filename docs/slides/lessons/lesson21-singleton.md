# Diseño Orientado a Objetos
## Singleton

-==========-

## Singleton

Singleton es un patrón de diseño de software el cual tiene como objetivo restringir el instanciamiento de la clase a un solo objeto.

-==========-

## Singleton

Dado que solo se puede construir una instancia del Singleton, cada propiedad solo esta presente una vez por clase, muy similar a las propiedades estáticas.

-==========-

## Singleton

<div class="image">
  <img class="no-border" data-src="img/21-01.png"/>
</div>

-==========-

## Singleton - Estructura

- Una propiedad estática: Contiene la instancia de la clase.
- Un constructor privado: Previene el instanciamiento arbitrario de la clase.
- Un Método público estático: Provee un punto de acceso global o común para la propiedad de la clase, es decir, la instancia.

-==========-

## Singleton - Ejemplo

```java
public class Singleton {

   private static Singleton singleton = new Singleton();

   private Singleton() { }

   public static Singleton getInstance( ) {
      return singleton;
   }
}
```

-==========-

## Singleton - Ejemplo

```java
Singleton tmp = Singleton.getInstance();

```

-==========-

## Singleton - Ejemplo 2

```java
public class ClassicSingleton {

   private static ClassicSingleton instance;

   private ClassicSingleton() {

   }

   public static ClassicSingleton getInstance() {

	  if(instance == null) {
         instance = new ClassicSingleton();
      }

      return instance;
   }
}
```

-==========-

## Ventajas ante clases estáticas

- Puede implementar interfaces y extender clases mientras que la clase estática no puede (puede extender clases, pero no hereda sus miembros de instancia).
- La clase estática tendrá todos sus miembros como estáticos a diferencia de Singleton.
- Se puede cargar **perezosamente** mientras que la estática se inicializará siempre que se cargue por primera vez.
- Podemos clonar el objeto de Singleton pero, no podemos clonar el objeto de clase estático.
- Singleton puede utilizar la característica orientada a objetos de polimorfismo, pero la clase estática no puede.

-==========-

## Usos comunes de Singleton

**Acceso a la interfaces de hardware**: El uso de singleton depende de los requisitos. Sin embargo prácticamente Singleton puede ser utilizado en caso de limitación de uso de recursos externos hardware requerido. Por ejemplo: impresoras de hardware donde el spooler de impresión se puede hacer un singleton para evitar múltiples accesos simultáneos y crear estancamiento.

-==========-

## Usos comunes de Singleton

**Logger**: Similarmente singleton es un buen candidato potencial para usar en la generación de archivos de registro.

-==========-

## Usos comunes de Singleton

**Archivo de configuración**: Utilizar singleton en configuraciones globales puede tener beneficios de rendimiento. Puede evitar que varios usuarios accedan y lean repetidamente el archivo de configuración o el archivo de propiedades.

-==========-

## Usos comunes de Singleton

**Cache**: Podemos usar el caché como un objeto singleton ya que puede tener un punto de referencia global y para todas las llamadas futuras al objeto de caché que la aplicación cliente usará el objeto en memoria.
