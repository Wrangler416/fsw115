const item = document.getElementById("list")

function getData() {
    axios.get("https://api.vschool.io/karatemple2/todo")

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

            const deleteBtn = document.createElement("BUTTON")
            deleteBtn.textContent = "DELETE"
            deleteBtn.setAttribute("id", "done")
            item.appendChild(deleteBtn)

            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("id", "boxes")
            item.appendChild(checkbox)

            checkbox.checked = data[i].completed

            checkbox.onclick = function() {
                axios.put("https://api.vschool.io/karatemple2/todo/" + data[i]._id, {"completed": !data[i].completed})

                .then(response => { getData()})
                .catch(error => console.log(error))
                item.appendChild(checkbox)
            }

            deleteBtn.onclick = function() {
                axios.delete("https://api.vschool.io/karatemple2/todo/" + data[i]._id, {"completed": !data[i].completed})

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

    const newTodo = {
        title: myForm.title.value
    }

    myForm.title.value = ""

    axios.post("https://api.vschool.io/karatemple2/todo", newTodo)

    getData()
    getData()

    .then(response => createList(response.data))
    .catch(error => console.log(error))
})

