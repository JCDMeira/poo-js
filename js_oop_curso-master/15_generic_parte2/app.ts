function identity<T>(arg: T): string {
  console.log(typeof arg);
  return "Este é o resultado final: " + arg.toString();
}

console.log(identity<string>('texto'));
console.log(identity<number>(5));
console.log(identity<boolean>(true));