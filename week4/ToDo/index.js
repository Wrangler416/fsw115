const item = document.getElementById("list")

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
            if(data[i].completed) { h1.style.textDecorationLine = "line-through" }
            item.appendChild(h1)

            const h2 = document.createElement("h2")
            h2.textContent = data[i].description
            item.appendChild(h2)

            const p = document.createElement("h2")
            p.textContent = data[i].price
            item.appendChild(p)

            const deleteBtn = document.createElement("BUTTON")
            deleteBtn.textContent = "X"
            deleteBtn.setAttribute("id", "done")
            item.appendChild(deleteBtn)

            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("id", "boxes")
            item.appendChild(checkbox)

            checkbox.checked = data[i].completed

            checkbox.onclick = function() {
                axios.put("https://api.vschool.io/karatemple/todo/" + data[i]._id, {"completed": !data[i].completed})

                .then(response => { getData()})
                .catch(error => console.log(error))
            item.appendChild(checkbox)
            }

            deleteBtn.onclick = function() {
                axios.delete("https://api.vschool.io/karatemple/todo/" + data[i]._id, {"completed": !data[i].completed})

                .then(response => { getData()})
                .catch(error => console.log(error))
            }
}
}

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

    const newTitle = {
        title: myForm.title.value,
        description: myForm.description.value,
        price: myForm.price.value
    }

    myForm.title.value = "",
    myForm.description.value = "",
    myForm.price.value = ""

    axios.post("https://api.vschool.io/karatemple/todo", newTitle)

    .then(response => createList(response.data))
    .catch(error => console.log(error))
})

