# Diseño Orientado a Objetos
## Data Transfer Object

-==========-

## Data Transfer Object

Un DTO es un patrón de diseño utilizado para encapsular y transportar datos de negocio.

Cuando el cliente solicita información de negocio, los objetos de servicio pueden construir el objeto Transfer Object, llenarlo con sus valores de atributo y pasarlo por valor al cliente.

-==========-

## DTO - Estructura básica

<div class="image">
  <img class="no-border" data-src="img/22-01.png"/>
</div>

-==========-

## DTO - Actores

<div class="image">
  <img class="no-border" data-src="img/22-02.png"/>
</div>

-==========-

## DTO - Ejemplo

```java
public class ContactDTO implements java.io.Serializable {

  public String firstName;
  public String lastName;
  public String address;

  	public ContactTO() { }

	public ContactTO(String firstName, String lastName, String address) {
		init(firstName, lastName, address);
	}

	public ContactTO(ContactTO contact) {
		init (contact.firstName, contact.lastName, contact.address);
	}

	public void init(String firstName, String lastName, String address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
	}

	public ContactDTO getData() {
		return new ContactTO(this);
	}
}
```
