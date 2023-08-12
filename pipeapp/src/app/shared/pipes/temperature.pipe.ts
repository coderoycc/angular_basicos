import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  tipos: Array<string> = ['C', 'F'];
  transform(value: number, tipo: string): string {
    if(this.tipos.includes(tipo)){
      const finalValue = (tipo === "F") ? value * (9 / 5) + 32 : value;
      return `${finalValue.toFixed(2)}°${tipo}`;
    }else{
      throw new Error('Tipo de temperatura no valido');
    }
  }
}
