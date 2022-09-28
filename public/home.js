
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
        
        <button>Delete</button> 
        
        `
    showGuest.appendChild(guestCard)
}


getAllGuest()


