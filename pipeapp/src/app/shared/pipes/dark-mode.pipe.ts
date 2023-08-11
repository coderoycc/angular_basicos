import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'darkMode',
})
export class DarkModePipe implements PipeTransform{
  transform(value: boolean) {
    // Cambios que realiza nuestro pipe
    // El VALUE es el valor que le pasamos al pipe el que va a lado izquierdo de la tuberia value | pipe

    return value ? 'text-white bg-dark':'text-dark bg-light';
  }
}