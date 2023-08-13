import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it("Deberia retornar grados C si mando 'C'", ()=>{
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,'C')).toEqual('12.00°C');
  })
  it('No deberia retornar nada por que el parametro no es correcto', ()=>{
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12,'E')).toEqual('');
  })
});
