
const baseURL = "http://localhost:5678"

const showPlayer = document.querySelector('#playerDisplay')
const addPlayerBtn = document.querySelector('#addPlayer')


const getAllPlayers = () => {
    axios.get(`${baseURL}/getPlayer`)
        .then((res) => {
        displayPlayer(res.data)    
        console.log(res.data)
        })
        .catch((err) => {   
        console.log(err) 
        })
} 

const displayPlayer = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        createPlayerCard(arr[i])
}
}

const createPlayerCard = (player) => {
    const playerCard = document.createElement("section")
    playerCard.classList.add('player-card')

    playerCard.innerHTML = `
        <h2>Player</h2>   
        <p>${player.name}</p>
        <button onclick="deletePlayer(${player.id})">Delete</button> 
        <br><br/>
        
        `
    showPlayer.appendChild(playerCard)
}

const addPlayer = () => {
    let nameInput = document.querySelector('#nameInput')
    

    let newPlayer = {
        name: nameInput.value,
        
    }

    axios.post(`${baseURL}/addPlayer`, newPlayer) 
    .then((res) => {
        showPlayer.innerHTML = ""

        nameInput.value = ""
        

        displayPlayer(res.data)
    })
}

const deletePlayer = (id) => {
    axios.delete(`${baseURL}/deletePlayer/${id}`)
        .then((res) => {
            showPlayer.innerHTML = ""
            displayPlayer(res.data)
        })

}

getAllPlayers()