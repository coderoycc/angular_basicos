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

# COMPONENTES 
* Los componentes por conveción siempre se deben crear en una carpeta dentro de `src/app` con los archivos principales.

* **En el archivo *.component.ts** se debe de importar el decorador `@Component` de la siguiente manera:
  ```typescript
  import { Component } from '@angular/core';
  // decorador
  @Component({
    selector: 'app-nombre',
    templateUrl: './nombre.component.html',
    //template: `<h1>Hola mundo</h1>`,
    styleUrls: ['./nombre.component.css']
    // styles: [`h1 { color: red; }`]
    // los estilos pueden tener mas archivos
  })
  export class NombreComponent {
    // codigo
  }
  // En la variable template se puede escribir el html directamente y en templateUrl se puede escribir la ruta del archivo html.
  ```
* Desde **angular-cli** se crea con ``ng generate component nombre`` o ``ng g c nombre``
* Se puede crear un componente dentro de otro componente. Para ello se hace uso de la carpeta que contendrá el componente hijo. Ejemplo: `ng g c nombre/carpeta/nombreNuevoComponente` *Mejor si se usa camelcase*
* **En el archivo *.component.html** se debe de escribir el html que se mostrará en la vista.
* Para integrar el componente debemos ir al componente PADRE e instaciar mediante el selector ``<app-nombre-nuevo-componente></app-nombre-nuevo-componente>``	
* NOTA: Al crear con el comando `ng g c nombre` se modifica automaticamente el archivo `app.module.ts` para que se pueda utilizar el componente creado.

## DECORADORES PARA ENVIAR DATOS
* el decorador `@Input()` sirve para enviar datos desde el componente padre al componente hijo. 
  * En el componente padre se debe de enviar los datos mediante el selector `<app-nombre-hijo [nombreVariable]="valor del dato a enviar"></app-nombre-hijo>`
  * En el componente hijo se debe de importar `import { Input } from '@angular/core';`
  * En el componente hijo se debe de declarar la variable que recibirá los datos `@Input() nombreVariable: tipoDato;`

* el decorador `@Output()` sirve para enviar datos desde el componente hijo al componente padre.
  * En el componente hijo se debe de importar `import { Output, EventEmitter } from '@angular/core';`
  * En el componente hijo se debe de declarar la variable (de tipo EventEmitter) que enviará  los datos `@Output() variableEnviar = new EventEmitter<tipoDato>();`
  * Para enviar los datos del componente hijo se debe usar la funcion `this.variableEnviar.emit(valorAEnviar);`
  * **NOTA**. En este caso *variableEnviar* funciona como un evento en el componente padre.
  * En el componente padre se debe de recibir los datos mediante el selector del HIJO `<app-nombre-hijo (variableEnviar)="nombreFuncion($event)"></app-nombre-hijo>`
  * En la parte de la lógica del componente padre se debe de crear la función que recibirá los datos y procesarlos de cualquier manera. `nombreFuncion(valorRecibido){...}`