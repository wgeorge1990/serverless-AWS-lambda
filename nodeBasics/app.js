const math = (n, callback) => {
 let a = callback(n)
 return a
}
 
const addFive = (n) => {
    return n + 5
}

let result = math(5, addFive)
console.log(result)
let x = null
x = undefined
console.log(x)
console.log(!!x)
if (!x) {
    console.log("if x is false")
}

function doStuff(data) {
    return new Promise((resolve, reject) => {
        let successMessage = {
            status: 'success',
            message: 'The promise resolved successfully!'
        }
        let errorMessage = {
            status: 'fail',
            message: 'data type was not correct!'
        }
        if (typeof data === 'boolean' && data === true) {
            resolve();
        } else {
            reject();
        }
    })
}

doStuff(true).then(
    () => {
        console.log("it was a success!!!!");
    }
    // },
    // () => {
    //     console.log("the data type was not a boolean and was not true and there for the failure message is being printed as a callback from the reject method passed in by the creation of the new promise.")
    // }
).catch((err) => {
    console.log("this is an error")
})

