// function foo(num) {
//     console.log('this is', num)
//     this.count++;
// }

// foo.count = 0

// for (let index = 0; index < 5; index++) {
//     foo(index);
// }
// foo.call(foo, 1)
// console.log(foo.count)



//default binding

//when run in browser window object has 'a' property, but not in node, which is the 'global' object
// var a = 1

// function fooDefault() {
//     "use strict" // if 'use strict' `this` is undefined
//     console.log(this.a)
// }

// fooDefault()

// function f1() {
//     console.log(1)
//     console.log(this == global);
//     (function() {
//         f2()
//     })()

// }

// function f2() {
//     console.log(this)
//     console.log(this == global)
//     console.log(2)
// }

// f1()

// setimeout has another scope
const obj = {
    foo: function() {
        console.log(this === obj)
        setTimeout(() => {
            console.log(this === obj)
        }, 1000)
    }
}

// obj.foo()

function foo() {
    console.log(arguments)
}