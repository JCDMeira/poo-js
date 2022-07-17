/*
  _ Error

  - Obj para tratar erros
  - dele deriva os erros mostrados e gerados
  - da pra criar erros personalizados
*/

try {
  throw new Error("Errouuu!!!");
} catch (e) {
  console.log(e.name + ": " + e.message);
}
