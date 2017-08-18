# Diseño Orientado a Objetos
## Acceso a datos

-==========-

## Acceso a datos

En el mundo real las aplicaciones requieren persistir información desde un punto. Comúnmente las aplicaciones de negocios utilizan conexiones a bases de datos relacionales.

-==========-

## Acceso a datos

Las aplicaciones pueden utilizar la `API` de `JDBC` para acceder a los datos que residen en un sistema de gestión de base de datos relacional (RDBMS).

-==========-

## Data Access

Un objeto de acceso a datos (DAO) nos sirve para abstraer y encapsular todo el acceso al origen de datos. El `DAO` administra la conexión con el origen de datos para obtener y almacenar datos.

-==========-

## DAO

<div class="image">
  <img class="no-border" data-src="img/20-01.png"/>
</div>

-==========-

## DAO

<div class="image">
  <img class="no-border" data-src="img/20-02.png"/>
</div>

-==========-

```java
public class ComentarioDTO {
    private String nombre;
    private String comentario;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
```

-==========-

```java

public class ComentarioDAO {

    private Connection conexion;

    private void abrirConexion() throws SQLException {

        String dbUri = "jdbc:derby://localhost:1527/Comentarios";

        String username = "fcfm";
        String password = "lsti01";

        //propiedad de clase
        conexion = DriverManager.getConnection(dbUri, username, password);
    }

    private void cerrarConexion() throws SQLException {
        conexion.close();
    }

    public boolean crear(ComentarioDTO dto) {
        try {
            abrirConexion();
            String insert = "insert into Comentarios(Nombre, Comentario) values (" + dto.getNombre() + ", " + dto.getComentario() + ");";
            Statement statement = conexion.createStatement();
            int filasAfectadas = statement.executeUpdate(insert);

            return filasAfectadas > 0;
        }
        catch(Exception e) {
            return false;
        }
        finally {
            try {
                cerrarConexion();
            }
            catch(Exception e) {
                return false;
            }
        }

    }

    public List<ComentarioDTO> obtener() {
        try {

            try {
                abrirConexion();
                String select = "select nombre, comentario from Comentarios";
                List comentarios = new ArrayList();

                Statement statement = conexion.createStatement();

                ResultSet result = statement.executeQuery(select);

                while(result.next()) {
                    String nombre = result.getString("Nombre");
                    String comentario = result.getString("comentario");

                    ComentarioDTO dto = new ComentarioDTO();
                    dto.setNombre(nombre);
                    dto.setComentario(comentario);

                    comentarios.add(dto);
                }

                return comentarios;
            }
            catch(Exception e) {
                return null;
            }
            finally {
                try {
                    cerrarConexion();
                }
                catch(Exception e) {

                }
            }


        }
        catch(Exception e) {
            return null;
        }

    }
}
```
