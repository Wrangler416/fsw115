axios.get("https://api.vschool.io/karatemple/todo").then(response => {

    for(let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)

        let form = document.createElement("form")
        form.setAttribute("name", "form")
        document.body.appendChild(form)

        let input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("name", "boxes")
        input.setAttribute("id", "clicked")
        document.body.appendChild(input) 

        document.getElementById("clicked").addEventListener("click", function() {
            h1.style.setProperty("text-decoration", "line-through")
        })

    }

})

.catch() 

