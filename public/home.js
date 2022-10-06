
const baseURL = "http://localhost:5678"

const showGuest = document.querySelector('#guestDisplay')
const addGuestBtn = document.querySelector('#addGuest')
const updateGuestBtn = document.querySelector('#updateGuest')



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

const updateGuest = (event) => {
    event.preventDefault()
    alert('Updated recipe')
    let nameInput = document.querySelector('#nameInput1')
    let dishInput = document.querySelector('#dishInput1')
    let commentInput = document.querySelector('#commentInput1')
    
    let updateGuestObj = {
        
        name: nameInput.value,
        dish: dishInput.value,
        comment: commentInput.value

    }
    console.log(nameInput.value)
    console.log(updateGuestObj)
    
    axios.put(`${baseURL}/updateGuest/${nameInput.value}`, updateGuestObj)
 
    .then((res) => {
        showGuest.innerHTML = ""
        
        displayGuest(res.data)
    })
    
}

const createGuestCard = (guest) => {
    const guestCard = document.createElement("section")
    guestCard.classList.add('guest-card')

    guestCard.innerHTML = `
        <h2>Recipe</h2>   
        <p>${guest.name}</p>
        <p>${guest.dish}</p>
        <p>${guest.comment}</p>
       
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
    alert('Recipe deleted')
}

const addGuest = () => {
    let nameInput = document.querySelector('#nameInput')
    let dishInput = document.querySelector('#dishInput')
    let commentInput = document.querySelector('#commentInput')

    let newGuest = {
        name: nameInput.value,
        dish: dishInput.value,
        comment: commentInput.value

    }

    axios.post(`${baseURL}/addGuest`, newGuest) 
    .then((res) => {
        showGuest.innerHTML = ""

        nameInput.value = ""
        dishInput.value = ""
        commentInput.value = ""

        displayGuest(res.data)
    })
    alert('New recipe added')
}

updateGuestBtn.addEventListener("click", updateGuest)


getAllGuest()





   

