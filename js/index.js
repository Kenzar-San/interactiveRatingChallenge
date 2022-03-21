const listNumbers = document.querySelectorAll('[data-value]')
const sections = document.querySelectorAll('.section')
const submit = document.querySelector('.submit')
const score = document.querySelector('.score')

let value = 0

listNumbers.forEach(rating => {

    rating.addEventListener('click', () => {

        listNumbers.forEach(rating => rating.classList.remove("active"))
        
        value = rating.dataset.value
        
        rating.classList.add("active")
        console.log(rating)
        console.log(value)
    })
})

        submit.addEventListener("click", () => {
            if(value!=0){
                // score.textContent = "value"
                const openContainer = document.querySelector('.open')
                openContainer.classList.remove('open')
                const toOpenContainer = document.querySelector('.thanks')
                toOpenContainer.classList.add('open')
                // score.classList.add('score')/
            
        } 
    })
        
