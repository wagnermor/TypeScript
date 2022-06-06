function sum(a: number, b: number) {
  return a + b;
}
console.log(sum('q',1));//erro
console.log(sum(3, 1));

//types
//interfaces

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  rugir(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  rugir: alturaEmDecibeis => (`${alturaEmDecibeis} dB`)
}

console.log(animal.rugir(12));

const felino: IFelino = {
  nome: 'Tigre',
  tipo: 'terrestre',
  visaoNoturna: true,
  rugir: alturaEmDecibeis => (`${alturaEmDecibeis} dB`)
}

console.log(felino.rugir(15));