let selection = document.querySelector('#doggoFormControlSelect1')
let displayArea2 = document.querySelector('#ajaxExercise2DoggoContainer') 
console.assert(selection, 'selection is not found')
console.assert(displayArea2, 'displayArea2 is not found')

window.addEventListener('load', function(){
    console.log('page is loaded....')
    axios.get('https://dog.ceo/api/breeds/list')
    .then(res => {
        if (res.status === 200){
            return res.data.message
        }
    })
    .then(data => {
        data.unshift('')
        let options = data.map(function(val, idx){
            return `<option id="selection-${idx}" value="${val}">${val}</option>`
        })
        selection.innerHTML = options.join('')
    })
})

selection.addEventListener('change', function(){
    console.log('selection changed...', selection.value)
    while (displayArea2.firstChild) {
        displayArea2.removeChild(displayArea2.firstChild);
    }
    if (selection.value !== ""){
        axios.get(`https://dog.ceo/api/breed/${selection.value}/images/random`)
        .then(res => {
            if(res.status === 200){
                console.log(res)
                return res.data
            } else {
    
            }
        }).then(json => {
            let imgHtml = `<img src="${json.message}" >`
            let img = document.createElement("img")
            img.setAttribute('src', json.message)
            img.style.width = '500px'
            displayArea2.appendChild(img)
            displayArea2.style.padding = "10px 0px"
            displayArea2.style.width = "500px"
            console.log(json.message)
        })
    } 
})