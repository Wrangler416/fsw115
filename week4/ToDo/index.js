axios.get("https://api.vschool.io/karatemple/todo").then(response => {

    for(let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement("h1")
        h1.setAttribute("class", "myelement")
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)

        let input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", "clicked")
        document.body.appendChild(input) 

        let clicked = document.getElementById("clicked")
        clicked.addEventListener("click", function() {

            for(var x = 0; x < h1.length; x++){
                h1[i].style.setProperty("text-decoration", "line-through")
            }
        })
    }
})

.catch() 