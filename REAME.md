# Basicos de Angular y demás
* Crear un nuevo proyecto con `ng new nombre`
  * El ANGULAR ROUTING es para poder crear diversas vistas, como componentes. Y creación de rutas

* Levantar el servidor con `ng serve` o `npm run start`

# Estructura carpetas
* Los archivos mas importantes para el funcionamiento de angular son tsconfig.* y angular.json
* Los archivos principales (globales) de angular son index.html y styles.css.
* *assets* tiene todas las dependencias de estilos,  almacenamiento de imagenes, recursos varios, etc.
* *environments* tiene los archivos de configuración de entornos de desarrollo y producción.
* *app* es la carpeta donde se desarrolla la aplicación. Tiene un archivo 
  * app.component.ts que es el componente principal de la aplicación. Contiene: 
    * selector: 'app-root' que es como se le llamará en el archivo indice principal. `<app-root></app-root>`.
    * templateUrl: './app.component.html' que es la vista principal de la aplicación que se relaciona con el componente y selector. Es lo que vamos a mostrar.
    * styleUrls: ['./app.component.css'] que es la hoja de estilos principal.
  * app.module.ts que es el módulo principal de la aplicación. 
  * app.component.html que es la vista principal de la aplicación. 
  * app.component.css que es la hoja de estilos principal de la aplicación.
### Relación entre archivos
* app.components.ts mantiene la logica de la aplicacion.
* app.components.html mantiene la vista de la aplicacion.
* app.components.css mantiene los estilos de la aplicacion.
* app.module.ts mantiene la configuracion de la aplicacion.

# Eventos
* Los eventos funcionan de manera similar a javascript, pero con una sintaxis diferente.
* Para poder utilizar los eventos, se debe de utilizar la directiva `(evento)="funcion()"` en el elemento que se desee.
