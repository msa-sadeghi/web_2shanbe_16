let form = document.getElementById("myForm")
let name = document.getElementById("name")
let email = document.getElementById("email")
let age = document.getElementById("age")
let country = document.getElementById("country")
let info = document.getElementById("info")
let submitBtn = document.querySelector("button")


name.addEventListener("input", (e)=>{
    let l = e.target.value.length
    let nameError = document.getElementById("nameError")
    if(l < 3){
        nameError.style.display = "block"
        name.classList.add("error")
    }else{
        nameError.style.display = "none"
        name.classList.remove("error")
    }
})

email.addEventListener("input", (e)=>{
    let emailError = document.getElementById("emailError")
    let emailVal = e.target.value
    // let pattern =  /^[\w\._]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
    // pattern.test(emailVal)

})
