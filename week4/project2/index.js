
document.getElementById("button").addEventListener("click", function(){
        axios.get("https://api.vschool.io/karatemple2/todo").then(response => {

                    for (let i = 0; i < response.data.length; i++) {
                            let h1 = document.createElement("h1")
                            h1.textContent = response.data[i].title
                            document.body.appendChild(h1)
                    
                    }
        })

})

.catch()


