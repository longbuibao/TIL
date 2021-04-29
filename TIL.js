function foo(num) {
    console.log('this is', num)
    this.count++;
}

foo.count = 0

for (let index = 0; index < 5; index++) {
    foo(index);
}
foo.call(foo, 1)
console.log(foo.count)