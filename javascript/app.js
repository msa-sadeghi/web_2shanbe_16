const container = document.querySelector('.container')

function getAllUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(data => renderUsers(data))
    .catch(error=>console.log(error))
}

getAllUsers()

function renderUsers(users){
    users.forEach(user => {
        const userCard = document.createElement("div")
        userCard.classList.add('card')
        const userName = document.createElement("h3")
        userName.innerText = user.name
        const userIdSpan = document.createElement('span')
        userIdSpan.innerText = user.id
        const usenameSpan = document.createElement('span')
        usenameSpan.innerText = user.username

        userCard.append(userName, userIdSpan, usenameSpan)
        container.append(userCard)
    });
}