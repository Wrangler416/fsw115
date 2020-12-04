async function getContent(){

    try {

        const response = await axios.get("https://rickandmortyapi.com/api/character/2") 
        const episode = await axios.get(response.data.episode[1])
        const char = await axios.get(episode.data.characters[1])

        sendToDOM(episode)
        sendMoreToDOM(episode)
        send(episode)
    }
    catch(error){
        console.log(error)
    }
}

getContent()

function sendToDOM(episode){
    const h1 = document.createElement("h1")
    h1.textContent = episode.data.name
    document.body.appendChild(h1)
}

function sendMoreToDOM(episode) {
    const h2 = document.createElement("h2")
    h2.textContent = episode.data.air_date
    document.body.appendChild(h2)
}

function send(episode) {
    const h3 = document.createElement("h3")
    h3.textContent = episode.data.episode
    document.body.appendChild(h3)
}


