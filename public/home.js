
const baseURL = "http://localhost:5678"

const showGuest = document.querySelector('#guestDisplay')

// Axios request to get guest array
// Loop over that array
// Create guest cards for each guest in the array




const getAllGuest = () => {
    axios.get(`${baseURL}/getGuest`)
        .then((res) => {
        displayGuest(res.data)    
        console.log(res.data)
        })
        .catch((err) => {   
        console.log(err) 
        })
} 

const displayGuest = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        createGuestCard(arr[i])
}
}

const createGuestCard = (guest) => {
    const guestCard = document.createElement("section")
    guestCard.classList.add('guest-card')

    guestCard.innerHTML = `
        <p>${guest.name}</p>
        <p>${guest.dish}</p>
        <p>${guest.comment}</p>
        <button onClick="updateGuest(${guest.id})">Update</button>
        <button onclick="deleteGuest(${guest.id})">Delete</button> 
        <br><br/>
        
        `
    showGuest.appendChild(guestCard)
}

const deleteGuest = (id) => {
    axios.delete(`${baseURL}/deleteGuest/${id}`)
        .then((res) => {
            showGuest.innerHTML = ""
            displayGuest(res.data)
        })

}

const updateGuest = (id, type) => {
    axios.put(`${baseURL}/updateGuest/${id}`, updateGuestObj) 
    .then((res) => {
        showGuest.innerHTML = ""
        displayGuest(res.data)
    })

}


getAllGuest()


