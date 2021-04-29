function foo(num) {
    console.log('this is', num)
    this.count++;
}

foo.count = 0

for (let index = 0; index < 10; index++) {
    foo(i);
}

console.log(foo.count)