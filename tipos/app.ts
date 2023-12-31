(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: string[] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum fuerza {
    fuerzaAcuaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
  }
  const fuerzaFlash = fuerza.fuerzaFlash;
  const fuerzaSuperman = fuerza.fuerzaSuperman;
  const fuerzaBatman = fuerza.fuerzaBatman;
  const fuerzaAcuaman = fuerza.fuerzaAcuaman;
  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: string = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);


})()

