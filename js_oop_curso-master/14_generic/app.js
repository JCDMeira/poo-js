function identity(arg) {
    console.log(typeof arg);
    return arg;
}
console.log(identity('string'));
console.log(identity(5));
console.log(identity(true));
