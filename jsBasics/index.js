//Object destructuri
let student = {
    firstname: 'will',
    lastname: 'george',
    age: 29,
    hobbies: [
        'painting',
        'mountain biking',
        'hiking',
        'programming',
        'fishing',
        'playing with my dog',
        'video games'
    ],
    hometown: 'Atlanta'
}

let { firstname: first, lastname: last } = student
console.log(first, last)

//Array destructuring

let a = [10, 20, 30, 40, 50, 60]
let [n1, n2, n3, , ...n4] = a
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// returns => 
//     10
//     20
//     30
//    ,  skips 40   ,
//     [50, 60]