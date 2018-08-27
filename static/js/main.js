console.log("I am here! Its Javascript Time!")

document.getElementById("js-clicker").addEventListener('click', () => {
    console.log('you clicked the button')
    fetch('/birthday')
        .then(r => r.json())
        .then(response => {
            console.log(response)
        })
})