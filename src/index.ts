function generic<T>(arg: T): T {
  console.log(arg);
  console.log(typeof arg);
  return arg;
}

type Person = {
  name: string,
  age: number
}

const person: Person = {
  name: 'nizhm',
  age: 25
}
generic(person);
