import { DarkModePipe } from "./dark-mode.pipe"

describe("Dark Mode Pipe",() => {
  it('Deberia retornar DarkMode si mando true', ()=>{
    const pipe = new DarkModePipe();
    expect(pipe.transform(true)).toEqual('text-white bg-dark');
  })
})