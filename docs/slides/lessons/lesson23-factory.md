# Diseño Orientado a Objetos
## Factory

-==========-

## Factory

El patrón `factory` es un patrón dentro de la categoría de los patrones creacionales. Este patrón crea un objeto en base a una decisión, sin exponer esta lógica al cliente.

-==========-

## Factory - Ejemplo

<div class="image">
  <img class="no-border" data-src="img/23-01.png"/>
</div>

-==========-

## Factory - Paso 1

Creamos una interfaz `Shape` para *suscribir* todas las clases hacia dicha interfaz.

```java
public interface Shape {
   void draw();
}
```

-==========-

## Factory - Paso 2

Creamos clases concretas e implementamos la interfaz que actúa como contrato.

```java
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Método draw en Rectangle");
   }
}
```

-==========-

## Factory - Paso 2

```java
public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Método draw en Square.");
   }
}
```

-==========-

## Factory - Paso 2

```java
public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Método draw en Circle.");
   }
}
```

-==========-

## Factory - Paso 3

Creamos una clase `factory` para la construcción de los objetos de las clases concretas en base a una decisión.

```java
public class ShapeFactory {

   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }
      if(shapeType.equals("CIRCLE")){
         return new Circle();

      } else if(shapeType.equals("RECTANGLE")){
         return new Rectangle();

      } else if(shapeType.equals("SQUARE")){
         return new Square();
      }

      return null;
   }
}
```

-==========-

## Factory - Paso 4

El cliente hace uso de ShapeFactory:

```java
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      Shape shape1 = shapeFactory.getShape("CIRCLE");
      shape1.draw();

      Shape shape2 = shapeFactory.getShape("RECTANGLE");
      shape2.draw();

      Shape shape3 = shapeFactory.getShape("SQUARE");
      shape3.draw();
   }
}
```
