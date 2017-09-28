# Asignación de la semana 7

## Agregar capacidades al login

**Objetivo**: Al finalizar la actividad deberás ser capaz de comprender el manejo de sesiones y cookies.

## Preparación
La descripción de esta asignación parte del supuesto que ya se cuenta con la versión de NetBeans (EE) y que incluye un contenedor Web GlassFish o Apache Tomcat atendiendo un puerto de escucha 8080.

## Actividades

En esta asignación se realizará lo siguiente:

Crear una mini-aplicación web que funcione con el patrón MVC:
- Crear tres páginas JSP: `login.jsp`, `register.jsp` y `profile.jsp`
- Crear cuatro servlets que funcionarán como controladores: `LoginController`, `LogoutController`, `ProfileController` y `RegisterController`
- Crear una clase de Java que funcionará como modelo
- Crear dos clases de servicio para orquestar llamadas a BD y validaciones
- Crear archivo en formato `JSON` que funcionará como base de datos.

## Actividad 1: Preparación de proyecto

1.- Crear un proyecto de tipo `Java Web` en NetBeans.
2.- Elimina el archivo `index.html` que crea por defecto NetBeans.

## Actividad 2: Agregar dependencias

Para el trabajo de datos utilizaremos la libreria [json-simple](https://github.com/fangyidong/json-simple) el cual nos otorgará la capacidad de leer y almacenar objetos en formato JSON.

1.- Descargar la librearía [json-simple]() (Ubicada en este repositorio).
2.- Agregar la dependencia dentro de `Libraries`:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/01.png" width="300" />

Se deberá ubicar la ruta donde se encuentra el archivo:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/02.png" width="300" />

## Actividad 3: Construcción de modelo

1.- Agregar una nueva clase de nombre `User` dentro del paquete `week7.models` y construirla en base al siguiente diagrama:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/03.png" width="300" />


## Actividad 5: Construcción de archivo json

1.- Agregar una nueva carpeta dentro de `Source Packages` de nombre `database`.
2.- Dentro de la carpeta anterior, agregar un archivo `JSON` y eliminar el contenido default de este archivo:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/06.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/07.png" width="300" />


## Actividad 4: Construcción de servicios

2.- Agregar una nueva clase de nombre `Database` con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/04.png" width="300" />

La lógica de cada método se describe a continuación:

- `getPathDatabase():String`: Devuelve la ruta donde se encontrará el archivo `JSON`. Ejemplo:

```java
private static String getPathDatabase() {
    return "ruta/de/archivo.json";
}
```

- `setJsonObject(name:String, lastName:String, username:String, password:String):boolean`: Devuelve `true|false` en función si se creó o no el usuario en el archivo `JSON`. Ejemplo:

```java
private static boolean setJsonObject(String valorPropiedad) {
     JSONObject obj = new JSONObject();

	//Solo guarda un valor
    obj.put("NombrePropiedad", valorPropiedad);

	String rutaJson = getPathDatabase(); //llamada a método anterior

    try (FileWriter file = new FileWriter(rutaJson)) {
            file.write(obj.toJSONString());

            return true;
    }
    catch(IOException ioext) {
        return false;
    }
}
```

- `getJsonObject():JSONObject`: Devuelve un objeto de tipo JSONObject con la información almacenada en el archivo `JSON`. Ejemplo:

```java
private static JSONObject getJsonObject() {

        try {
			String rutaJson = getPathDatabase();
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(new FileReader(rutaJson));

            JSONObject jsonObject =  (JSONObject) obj;

            return jsonObject;
        }
        catch(IOException ioext) {
            return null;
        }
        catch(ParseException pext) {
            return null;
        }
    }
```

- `getUserByUsername(username:String):User`: Devuelve un objeto de tipo `User` con la información del archivo `JSON`.

```java
public static User getUserByUsername(String username) {
    User user;

    JSONObject jsonObject = getJsonObject(); //llama a método anterior

    if(jsonObject != null) {
        String propiedadDb = (String) jsonObject.get("NombrePropiedad");

		//Valida si el usuario que se pide es igual al que se encuentra
		//en el archivo JSON
        if(username.equals(propiedadDb)) {
            user = new User(propiedadDb); //Completar con todas las propiedades del usuario
        }
        else {
            user = null;
        }

        return user;
    }
    else{
        return null;
    }
}
```

- `getUserByUsernamePassword(username:String, password:String):User`: Devuelve un objeto de tipo `User` con la información del archivo `JSON`. Ejemplo:

```java
public static User getUserByUsernamePassword(String username, String password){
    User user;

    JSONObject jsonObject = getJsonObject(); //Llamáda a método

    if(jsonObject != null) {
        String propiedadDb = (String) jsonObject.get("Propiedad");

		//Validar password y usuario
		//passwordDb no existe en este contexto. Usar el ejemplo de propiedadDb
        if(username.equals(propiedadDb) && password.equals(passwordDb)) {
            user = new User(propiedadDb); //Completar con propiedades para construir objeto
        }
        else {
            user = null;
        }

        return user;
    }
    else{
        return null;
    }
}
```

- `setUser(name:String, lastName:String, username:String, password:String):boolean`: Devuelve `true|false` en caso de crearse o no, el usuario. Ejemplo:

```java
public static boolean setUser(String name, String lastName, String username, String password) {

	boolean isSetup = setJsonObject(name, lastName, username, password);

	return isSetup;
}
```


2.- Agregar una nueva clase de nombre `Authenticate` con la siguiente estructura:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/05.png" width="300" />


## Actividad 5: Construcción de controladores

1.- Crear un controlador con nombre `LoginController`. El cual se encargará de las siguientes tareas:

- Validar la información introducida por el usuario en `login.jsp`. Deberá llamar el método `Authentication.isValid(username:String, password:String)` para este fin.
- En caso de ser válido, deberá obtener la información restante del usuario mediante `Database.getUserByUsername(username:String):User`
- Construir una variable de sesión para almacenar el `username`.
- Utilizar un objeto de tipo `RequestDispatcher` para enviar variables de "error" hacia las vistas. Ejemplo:

```java
RequestDispatcher dispatcher = request.getRequestDispatcher("pagina.jsp");
dispatcher.forward(request, response);
```

2.- Crear un controlador con nombre `LogoutController`. El cual se encargará de las siguientes tareas:

- Terminar la sesión del usuario.
- Reedireccionar hacia `login.jsp`. Ejemplo:

```java
HttpSession session = request.getSession();
session.invalidate();
response.sendRedirect("login.jsp");
```

3.- Crear un controlador de nombre `RegisterController`. El cual se encargará de las siguientes tareas:

- Validar que la información introducida no se encuentre vacía. Puede utilizarse el método `String.isEmpty()`
- Hacer uso de un objeto `RequestDispatcher` para enviar variables de error hacia las vistas.
- Registrar los datos mediante el método `Database.setUser(name:String, lastName:String, userName:String, password:String);`
- En caso de ser correcto el proceso, deberá enviar hacia `login.jsp` con el mensaje de éxito. En caso de ser incorrecto, deberá volver hacia `register.jsp` con el mensaje de error.

4.- Crear un controlador de nombre `ProfileController`. Este controlador se encargará de las siguientes tareas:

- Crear una cookie de nombre `color` con el valor seleccionado por el usuario.

## Actividad 6: Construcción de páginas

1.- Crear la página `login.jsp`. Esta página deberá realizar las siguientes tareas:

- Validar si la sesión se encuentra activa. Si la sesión se encuentra activa, deberá redireccionar a `profile.jsp`.
- Validar si existe un mensaje de éxito por parte de `RegisterController`.
- El formulario debe encapsular la información del usuario: `username` y `password` dentro de un `form` y enviarlos al controlador `LoginController` para procesar la información como se describe en la Actividad 5. Deberá contener un aspecto como el siguiente:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/08.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/09.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/12.png" width="300" />

2.- Puedes incluir/Crear la página `error.jsp` funcionando igual que las asignaciones anteriores. O de otro modo, no utilizar `error.jsp` pero validar el usuario en la misma página de `login.jsp` y mostrar un mensaje en caso de ser un usuario inválido, como se muestra en la siguiente imagen:

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/13.png" width="300" />

3.- Crear la página `register.jsp`. Esta página deberá realizar las siguientes tareas:

- Encapsular dentro de un `form` los elementos `input` y `label` necesarios para proveer al usuario un formulario de captura de la siguiente información: **Nombre**, **Apellidos**, **Usuario** y **Password**
- Generar un `post` hacia el controlador `RegisterController`, el cual se encargará de procesar la solicitud como se menciona en la Actividad 5.ç
- Validar si el controlador retorna un mensaje de error. En caso de existir, se deberá mostrar.


<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/10.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/11.png" width="300" />

4.- Crear la página `profile.jsp`. Esta página deberá realizar las siguientes tareas:

- Validar si la sesión se encuentra activa. Si la sesión **no** se encuentra activa, deberá redireccionar a `login.jsp`
- Mostrar la información del usuario como se muestra en la imagen.
- Encapsular dentro de un `form`, una lista seleccionable `select` con mínimo tres colores de `css` y un `input` de tipo `submit` para guardar el color preferido.
- La información del formulario referente al color deberá ser procesada por `ProfileController` como se describe en la Actividad 5.
- Un enlace para cerrar la sesión. El enlace deberá *apuntar* hacia `LogoutController` mediante la propiedad `href`. Y dentro de `LogoutControllaer` deberá invalidarse la sesión como se describe en la Actividad 5.

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/14.png" width="300" />

<img src="https://github.com/migsalazar/DOO201709/blob/master/docs/assets/week7-img/15.png" width="300" />
