# Basicos de Angular y demás

- Crear un nuevo proyecto con `ng new nombre`

  - El ANGULAR ROUTING es para poder crear diversas vistas, como componentes. Y creación de rutas

- Levantar el servidor con `ng serve` o `npm run start`

# Estructura carpetas

- Los archivos mas importantes para el funcionamiento de angular son tsconfig.\* y angular.json
- Los archivos principales (globales) de angular son index.html y styles.css.
- _assets_ tiene todas las dependencias de estilos, almacenamiento de imagenes, recursos varios, etc.
- _environments_ tiene los archivos de configuración de entornos de desarrollo y producción.
- _app_ es la carpeta donde se desarrolla la aplicación. Tiene un archivo
  - app.component.ts que es el componente principal de la aplicación. Contiene:
    - selector: 'app-root' que es como se le llamará en el archivo indice principal. `<app-root></app-root>`.
    - templateUrl: './app.component.html' que es la vista principal de la aplicación que se relaciona con el componente y selector. Es lo que vamos a mostrar.
    - styleUrls: ['./app.component.css'] que es la hoja de estilos principal.
  - app.module.ts que es el módulo principal de la aplicación.
  - app.component.html que es la vista principal de la aplicación.
  - app.component.css que es la hoja de estilos principal de la aplicación.

### Relación entre archivos

- app.components.ts mantiene la logica de la aplicacion.
- app.components.html mantiene la vista de la aplicacion.
- app.components.css mantiene los estilos de la aplicacion.
- app.module.ts mantiene la configuracion de la aplicacion.

# Eventos

- Los eventos funcionan de manera similar a javascript, pero con una sintaxis diferente.
- Para poder utilizar los eventos, se debe de utilizar la directiva `(evento)="funcion()"` en el elemento que se desee.

# COMPONENTES

- Los componentes por conveción siempre se deben crear en una carpeta dentro de `src/app` con los archivos principales.

- **En el archivo \*.component.ts** se debe de importar el decorador `@Component` de la siguiente manera:
  ```typescript
  import { Component } from "@angular/core";
  // decorador
  @Component({
    selector: "app-nombre",
    templateUrl: "./nombre.component.html",
    //template: `<h1>Hola mundo</h1>`,
    styleUrls: ["./nombre.component.css"],
    // styles: [`h1 { color: red; }`]
    // los estilos pueden tener mas archivos
  })
  export class NombreComponent {
    // codigo
  }
  // En la variable template se puede escribir el html directamente y en templateUrl se puede escribir la ruta del archivo html.
  ```
- Desde **angular-cli** se crea con `ng generate component nombre` o `ng g c nombre`
- Se puede crear un componente dentro de otro componente. Para ello se hace uso de la carpeta que contendrá el componente hijo. Ejemplo: `ng g c nombre/carpeta/nombreNuevoComponente` _Mejor si se usa camelcase_
- **En el archivo \*.component.html** se debe de escribir el html que se mostrará en la vista.
- Para integrar el componente debemos ir al componente PADRE e instaciar mediante el selector `<app-nombre-nuevo-componente></app-nombre-nuevo-componente>`
- NOTA: Al crear con el comando `ng g c nombre` se modifica automaticamente el archivo `app.module.ts` para que se pueda utilizar el componente creado.

## DECORADORES PARA ENVIAR DATOS

- el decorador `@Input()` sirve para enviar datos desde el componente padre al componente hijo.

  - En el componente padre se debe de enviar los datos mediante el selector `<app-nombre-hijo [nombreVariable]="valor del dato a enviar"></app-nombre-hijo>`
  - En el componente hijo se debe de importar `import { Input } from '@angular/core';`
  - En el componente hijo se debe de declarar la variable que recibirá los datos `@Input() nombreVariable: tipoDato;`

- el decorador `@Output()` sirve para enviar datos desde el componente hijo al componente padre.
  - En el componente hijo se debe de importar `import { Output, EventEmitter } from '@angular/core';`
  - En el componente hijo se debe de declarar la variable (de tipo EventEmitter) que enviará los datos `@Output() variableEnviar = new EventEmitter<tipoDato>();`
  - Para enviar los datos del componente hijo se debe usar la funcion `this.variableEnviar.emit(valorAEnviar);`
  - **NOTA**. En este caso _variableEnviar_ funciona como un evento en el componente padre.
  - En el componente padre se debe de recibir los datos mediante el selector del HIJO `<app-nombre-hijo (variableEnviar)="nombreFuncion($event)"></app-nombre-hijo>`
  - En la parte de la lógica del componente padre se debe de crear la función que recibirá los datos y procesarlos de cualquier manera. `nombreFuncion(valorRecibido){...}`

# MODULOS

- Los módulos son una forma de organizar la aplicación en partes lógicas.
- Un archivo **module** contiene un decorador `@NgModule` que recibe un objeto con las siguientes propiedades:
  - declarations: que es un arreglo de componentes, directivas y pipes que pertenecen al módulo _(pedazos de componentes)_.
  - imports: que es un arreglo de módulos que se importan al módulo. En un componente es recomendable usar el módulo `CommonModule` que contiene las directivas básicas de angular `NgFor, NgIf, NgClass, etc.`.
  - exports: que es un arreglo de componentes, directivas y pipes que se exportan para que puedan ser usados fuera del módulo. (**BookComponent**)
  - providers: que es un arreglo de servicios que se van a utilizar en el módulo.
  - bootstrap: que es un arreglo de componentes que se van a cargar cuando se inicie la aplicación.

## Crear un modulo

- Para crear un módulo se debe de ejecutar el comando `ng g m nombre` o `ng generate module nombre`

# TESTING

- Algunos de los frameworks que se usan para realizar testing en angular son:
  - Jasmine: pruebas unitarias y de creacion
  - Karma
  - Protractor: mayormente usado en angular 11 _e2e (endtoend)_
- Las pruebas tienen un nombre convencional: `nombre.component.spec.ts` o `nombre.component.test.ts`, pero se recomienda usar **spec**
- Se pueden hacer pruebas a la **lógica** de la aplicación y pruebas a la **vista** de la aplicación.

## PRUEBAS A LA LOGICA

- Son conocidas como pruebas unitarias.
- Un ejemplo de prueba, se muestra a continuación, tomando de ejemplo la creación de un componente.

```typescript
describe("Pruebas de Contador", () => {
  // bloque que se ejecuta antes de todas las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, ButtonAddComponent],
    }).compileComponents();
  });

  it("Debe de crear el componente", () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
  it("Valor inicial del contador 10", () => {
    const contador = new ContadorComponent();
    expect(contador.contador).toBe(10);
  });
});
```

## PRUEBAS A LA VISTA HTML

- Estas pruebas son conocidas como pruebas de integración.
- Un ejemplo de prueba, se muestra a continuación, tomando de ejemplo la renderización de un boton para hacer click en el.

```typescript
describe("Pruebas de integracion", () => {
  let fixture: ComponentFixture<ContadorComponent>;
  let component: ContadorComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, ButtonAddComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Prueba de evento click", () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const counterValue = compiled.querySelector("h1")!;
    // FIXTURE tiene acceso a todos los componentes del template y con debugElement indicamos que interactuaremos con el DOM (button)
    const btn: HTMLElement =
      fixture.debugElement.nativeElement.querySelector("#add");

    btn.click(); // simulamos un click

    fixture.detectChanges(); // renderizamos el componente despues de los cambios

    expect(counterValue?.textContent).toEqual("Contador: 11");
  });
});
```

**NOTA**. Con el símbolo `!` se indica que el elemento no puede ser nulo. Debe existir si o si.

## ESPIAS en TESTING

- Los espias son funciones que se ejecutan en lugar de la función original.
- Se puede saber cuantas veces se llama a una función usando `spy.completarTarea.calls.count()`

## TESTING DE SERVICIOS HTTP

- Para hacer pruebas a los servicios HTTP se debe de importar el modulo `HttpClientTestingModule` en el archivo de test.

## COBERTURA DE PRUEBAS (COVERAGE)

- Para saber la cobertura de nuestras pruebas se ejecuta el comando `ng test --code-coverage` y se creará una carpeta llamada **coverage** en la raíz del proyecto.
- En la carpeta **coverage** se encuentra un archivo **index.html** que se puede abrir en el navegador para ver la cobertura de las pruebas.
- Tambien se puede ver la cobertura de las pruebas en la terminal. Después de ejecutar el comando. Se muestra un resumen de las pruebas y la cobertura de las mismas.

# DEPLOY o DESPLIEGUE

- Se debe de ejecutar el comando `ng build` para crear la carpeta **dist** que contiene los archivos para desplegar la aplicación. Antes se usaba **ng build --prod** pero ya no es necesario.

# ESTILOS CSS EN ANGULAR

## ESTILOS DEDICADOS

- Para estilos dedicados se usa el acrhivo **nombre.component.ts** en la parte del decorador `@Component` se usa la propiedad `styleUrls: ['./nombre.component.css']` donde se asignan las rutas de los archivos css que se usarán.
- Tambien se puede usar la propiedad `styles: ['h1 { color: red; }']` donde se escriben los estilos directamente con strings.
- Cada estilo es independiente para cada componente. No se puede usar un estilo de un componente en otro componente.

## ESTILOS GLOBALES

- Para definir estilos globales, se debe incluir los estilos necesarios que sean globales en el archivo **styles.css** que se encuentra en la raíz del proyecto.
- Estos estilos se compartiran con todos los componentes y todos los archivos.

# PWA (PROGRESSIVE WEB APP)

- Las PWA son aplicaciones web que se comportan como aplicaciones nativas.
- Para crear una PWA se debe de ejecutar el comando `ng add @angular/pwa` o tambien se puede agregar con `ng add @angular/pwa@1.0.0` para agregar una versión especifica.
- Requiere que se actalicen las versiones y dependencias de angular.

# ACTUALIZAR ANGULAR JUNTO CON TODAS SUS DEPENDENCIAS

- Para actualizar un proyecto con angular y todas sus dependencias se usa el comando `ng update` tambien las opciones `ng update --all --force` o `ng update @angular/core @angular/cli --force` para actualizar solo angular y angular-cli.

# SERVICIOS (services)

- Los servicios son clases que se encargan de realizar tareas especificas.
- En angular se debe de crear una carpeta **services** dentro de la carpeta **app** para almacenar los servicioso tambien se puede crear una carpeta **services** dentro de un modulo para almacenar los servicios que se usaran en ese modulo.
- Para crear un servicio se debe de ejecutar el comando `ng g s carpeta/nombre_servicio` o `ng generate service services/nombre`
- Un servicio tiene un decorador `@Injectable` que se encarga de inyectar el servicio en el módulo o componente que lo requiera, este decorador proviene de `@angular/core`.

## Uso de un servicio

- Se debe declarar en el archivo **-.module.ts** superior donde se encuentra el servicio.
- Se declara en la parte de `providers: []` del decorador `@NgModule` o `@Component` dependiendo del archivo donde se encuentre.
- En el archivo que consume el servicio (componente o modulo) se debe importar el servicio `import { NombreServicio } from './services/nombre.service';`
- Para usarlo en la parte logica del componente se instancia la variable que contendra el servicio.

```ts
export class NombreComponent {
  constructor(private nombreServicio: NombreServicio) {}

  get variable() {
    return this.nombreServicio.variable;
  }
}
```

Comunmente se usa el mismo nombre del servicio pero con minusculas. Y se declara en el constructor del componente.

```dat
Crear proyecto con api
MEALDB API
// Buscar Comidas
https://www.themealdb.com/api/json/v1/1/search.php?s=<<cadena>>


// Lista de comidas por area (pais)
https://www.themealdb.com/api/json/v1/1/list.php?a=list

// Lista de ingrediente
https://www.themealdb.com/api/json/v1/1/list.php?i=list


// Listas de comidas por categorias con descripcion
https://www.themealdb.com/api/json/v1/1/categories.php

// Comida random (1)
https://www.themealdb.com/api/json/v1/1/random.php

// Comida por ID
https://www.themealdb.com/api/json/v1/1/lookup.php?i=<<ID>>
```

# Peticiones HTTP

- Para hacer peticiones HTTP se debe de importar el modulo `HttpClientModule` en el archivo **app.module.ts** o en el modulo donde se vaya a usar. (modulo superior del componente).

- En el servicio (general-local) se debe de importar el modulo `HttpClient` de `@angular/common/http` y se debe de inyectar en el constructor del servicio.
- En el componente donde se usaran los datos de la petición se debe importar el servicio y se debe de inyectar en el constructor del componente.
- **NOTA:** Cuando el servicio (archivo) que hace la peticion HTTP tiene el decorador `@Injectable` y dentro tiene `providedIn: 'root'` significa que se puede usar en cualquier componente, caso contrario se deberia de importar en el modulo. (En la parte de providers: []).

# DIFERENCIA ENTRE ONINIT y CONSTRUCTOR

- El constructor se ejecuta antes que el ngOnInit.
- El constructor se ejecuta antes de que se renderice el componente.

# LAZY LOAD

- El lazy load es una forma de cargar los componentes de manera dinámica.
- En imagenes se puede usar el atributo `loading="lazy"` para que la imagen se cargue de manera dinámica.
- En las nuevas versiones se usa la importación de `    NgOptimizedImage,` en el archivo MODULO superior del componente que carga las imagenes.
  - En la imagen se usa el dataBinding `[ngSrc]="url"`, si la URL viene de una petición es posible que no se resuelva la URL, en ese caso usar `*ngIf="url"` para que se muestre la imagen cuando la URL este disponible.
  - Tambien se debe usar SI o SI la propiedad `fill` o `width` y `height` para optimizar la carga de las imágenes. Todo esto en la etiqueta **IMG**.
  - La etiqueta por defecto ya lleva el valor de `loading="lazy"`.

# PIPES

- Los pipes son filtros que se pueden aplicar a los datos que se muestran en la vista.
- Existen pipes predefinidos que son: `uppercase, lowercase, date, currency, percent, json, slice, etc.`
- Tambien se pueden crear pipes personalizados.

## Pipes personalizados

- Para crear un pipe personalizado se debe de ejecutar el comando `ng g p pipes/nombre` o `ng generate pipe pipes/nombre`
- En el modulo superior se debe importar el pipe, en la parte de `declarations`
- En ese mismo modulo que contiene todos los componentes se puede usar el PIPE ya creado.

# LIFECYCLE HOOKS

- Los Hooks son aquellas funciones que sirven en momentos determinados de un componente.
- Algunos de los mas utilizados son `ngOnInit()` `ngOnDestroy()` `ngOnChange()`
- Se implementan como una interfaz.

```ts
import { Component, OnInit, OnDestroy } from "@angular/core";
export class AppComponent implements OnInit, OnDestroy {}
```

# RXJS

- RxJs es una libreria para JS, es una forma de trabajar con reactividad.
- Util para optimizar las promesas (tener el control) mendiante **obserbables**.

## OBSERVABLE

- Es una herramienta que nos permite manejar flujos de datos (codigo) asíncronos.
- Un objeto que interactua con el asincronismo y emite eventos para el OBSERVADOR _observer_. Comunmente es definido detro del constructor.
- Los observables no funcionan sin una suscripcion **subscribe**, este permite seguir al observable. `myObservable.subscribe()`.
- Con el observable manejamos el flujo de datos asincrónico y con el subscribe manejamos los datos que nos devuelve el observable.

## OBSERVER

- Es una parte importante del OBSERVABLE, pues este se encarga de emitir los eventos que se realizan en el observable.
- Algunos de los metodos del **observer** son:
  - `next(valor)` que devuelve el valor procesado y continua con el proceso.
  - `closed()` que indica que la suscripcion termina.
  - `error()` un bandera (notificacion) que indica al subscribe que ocurrio un error en el observer.
- Ejemplo basico de Observable, subscribe, observer.

```ts
constructor(){
  let numero: number = 0;
  const myObservable = new Observable<number>((observer) => {
    setInterval(()=>{
      numero++;
      observer.next(numero);
      // observer.complete()
      // observer.error()
    }, 3000);
  });
  myObservable.subscribe((resolve)=> console.log(resolve));
}
```

## SUBSCRIBE

- Llamada que se encarga de obtener el flujo de datos procesado por un OBSERVABLE.
- Un subscribe tiene tres propiedades (callbacks) al suscribirse a un observable. (Rx)
  - `resolve`: cuando se resuelve correctamente el procesamiento de datos.
  - `error`: en caso de que ocurra un error.
  - `complete`: cuando el observe acabó de procesar los datos.
- Los valores se escriben dentro de un objeto con los eventos que se emiten desde el observable.

```ts
myObservable.subscribe({
  next: (value) => {
    console.log("El valor es: ", value);
  },
  error: (err) => {
    console.warn("Ocurrio un error");
  },
  complete: () => {
    console.log("Completado");
  },
});
```

### Operadores en los SUBSCRIBE

Existen operadores que permiten preprocesar los datos antes de recuperarlos en el subscribe.

- `Filter`: Nos permite filtrar valores del observable para posteriormente pasarlo al subscribe.

```ts
// en este ejemplo se usa el Observable INTERVAL con un filter de todos los numeros pares
this.miIntevalo
  .pipe(
    take(4), // repeticiones (solo 4 iteraciones)
    filter((x) => x%2===0)
    take(4) // limitar el filtro (los primeros 4 pares)
  )
  .subscribe(value =>{console.log(value)})
```

- El **pipe** tambien se puede poner despues del observable. Como el siguiente ejemplo completo.

```ts
miIntevalo: Observable<number> = interval(1000).pipe(
    map((val) => val + 1),
    filter((x) => x % 2 === 0),
    take(5)
  ); // imprime los primeros 5 pares

  suscripcion: Subscription | null = null;
  constructor() {}
  ngOnInit() {
    this.suscripcion = this.miIntevalo.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log('Se imprimieron los primeros 5 numeros pares');
      }
    });
  }

  ngOnDestroy() {
    // al destruir el componente tambien nos dessuscribimos de observable.
    this.suscripcion!.unsubscribe();
    console.log('Componente destruido');
  }
```
