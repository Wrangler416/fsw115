document.getElementById("button2").addEventListener("click", function(){
    axios.get("https://api.vschool.io/karatemple3/todo/").then(response => {

                for (let x = 0; x < response.data.length; x++) {
                        let h1 = document.createElement("h1")
                        h1.textContent = response.data[x].title
                        document.body.appendChild(h1)
                
                }
    })

})

.catch()
