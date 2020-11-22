function getData() {
    axios.get("https://api.vschool.io/karatemple/todo")

    .then(response => createList(response.data))
    .catch(error => console.log(error))
}

function createList(data) {

    clearOut()

    for(let i = 0; i < data.length; i++) {
            const h1 = document.createElement("h1")
            h1.textContent = data[i].title
            document.body.appendChild(h1) 

            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("id", "boxes")
            // checkbox.setAttribute("onClick", checkboxes())
            document.body.appendChild(checkbox)   
                
}
}

// function checkboxes() {

//     let checked = document.getElementById("boxes")

//     if(checked.checked == true) {
//         h1.style.setProperty("text-decoration", "line-through")
//  }
// }
   


function clearOut() {
            const item = document.getElementById("list")
            while(item.firstChild) {
                item.removeChild(item.firstChild)
            }
}




getData()

const myForm = document.myForm
myForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newItem = {

        title: myForm.title.value,
        description: myForm.description.value
    }

    myForm.title.value = "",
    myForm.description.value = ""

    axios.post("https://api.vschool.io/karatemple/todo", newItem)

    .then(response => createList(response.data))
    .catch(error => console.log(error))
})

