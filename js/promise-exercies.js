const urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
]

// Part 1. Use $.get()
// urls.map(function(url){
//     $.get(url)
//     .then(function(response){
//         console.log('data was fetched! ' )
//         console.log(response)
//     })
// })

// Part 2. Use Promise.All
// function fetchImage(url){
//     return $.get(url)
// }
// Promise.all(urls.map(function(url){
//     return fetchImage(url)
// }))
// .then(response => {
//     console.log(response)
//     console.log('all the data was fetched')
// })


//Part 3. Resolve Reject
function addNumbers(x, y){
    return new Promise(function(resolveFn, rejectFn){
        if (typeof x === 'number' && typeof y === 'number'){
            resolveFn(x + y)
        } else {
            rejectFn('x or y is not number')
        }
    })
}

function tryAddNumbers(x, y){
    addNumbers(x, y)
    .then(function (answer){
        console.log(answer)
    })
    .catch(function(error){
        console.warn(error)
    })
    .finally(function(something){
        console.log('something is ' + something)
        console.log('this is finally')
    })
}

// tryAddNumbers(1, 2)
// tryAddNumbers('34', 2)

// Part 4. Promisify
const dropButteredToastOnFloor = (success, failure) => {
    let drop = Math.random()
    if (drop < 0.5){
        console.log('Landed butter-side up!')
        success(drop)
    } else {
        console.log("Landed butter-side down...")
        failure(drop)
    }
}

const dropToastPromisified = () => new Promise(dropButteredToastOnFloor)

const primiseExerciseOutput = document.querySelector('#promiseExerciseDoggoContainer')
console.assert(primiseExerciseOutput, 'primiseExerciseOutput is not found')



const dropToastButton = document.querySelector('#promiseExerciseButton')
dropToastButton.addEventListener('click', function(){
    dropToastPromisified()
    .then((ratio) => {
        primiseExerciseOutput.innerHTML = '<h3>Whew, that was close!</h3>  >>>' + ratio
    })
    .catch((ratio) => {
        primiseExerciseOutput.innerHTML = '<h3>Well shucks, there goes my toast...</h3> >>>' + ratio 
    })
})
