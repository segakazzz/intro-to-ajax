let button = document.querySelector('#ajaxExercise1GenerateDoggoBtn')
let displayArea = document.querySelector('#ajaxExercise1DoggoContainer') 
console.assert(button, 'button is not found')
console.assert(displayArea, 'displayArea is not found')

button.addEventListener('click', function(){
    button.innerHTML = 'Generage Doggo..'
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        if(res.status === 200){
            //console.log(res)
            return res.data
        } else {

        }
    }).then(json => {
        while (displayArea.firstChild) {
            displayArea.removeChild(displayArea.firstChild);
        }
        let imgHtml = `<img src="${json.message}" >`
        let img = document.createElement("img")
        img.setAttribute('src', json.message)
        img.style.width = '500px'
        displayArea.appendChild(img)
        displayArea.style.padding = "10px 0px"
        displayArea.style.width = "500px"
        //console.log(json.message)
    })
    //console.log('clicked')
})