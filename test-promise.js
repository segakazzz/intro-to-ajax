const fetch = require("node-fetch");
function func1(){
    console.log('func1')
    return fetch('https://dog.ceo/api/breeds/image/rndom')
}

function func2(response){
    console.log(response)
    console.log('func2')
    if (response.status !== 200){
        throw new Error("Connetion Error " + response.status)
    }
}

function func3(response){
    console.log('func3')
    return response
}

const promiseArray = [
    func1(), func2(), func3()
]

// func1()
//     .then(func3)
//     .then(func2)
//     .catch(function(error){
//         console.error(error)
//     })

Promise.all(promiseArray).then(function(re))