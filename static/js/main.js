
const elementFactory = (element, content) => {
    const htmlElement = document.createElement(element)
    // debugger
    if (content !== null) {
        htmlElement.textContent = content
    }
    return htmlElement
}

document.getElementById("js-clicker").addEventListener('click', () => {
    fetch('/birthday')
        .then(r => r.json())
        .then(response => {
            const birthdays = response
            // create document fragment
            const frag = document.createDocumentFragment()
            birthdays.forEach(birthday => {
                // create three text elements
                nameElement = elementFactory('p', birthday.name)
                dateElement = elementFactory('p', birthday.birthday)
                greetingElement = elementFactory('p', birthday.greeting)

                // create parent element
                parentElement = elementFactory('div', null)
                parentElement.appendChild(nameElement)
                parentElement.appendChild(dateElement)
                parentElement.appendChild(greetingElement)

                // append parent element to fragment
                frag.appendChild(parentElement)
            })
            document.getElementById('output').appendChild(frag)

        })

})