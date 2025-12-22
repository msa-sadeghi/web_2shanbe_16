const btn = document.querySelector('button')
const inputElement = document.querySelector('input')
const list = document.querySelector('.list')
const resetBtn = document.querySelector('.reset')
let itemsList = []
btn.addEventListener('click', (e)=>{
    let inputvalue = inputElement.value
    itemsList.unshift(inputvalue)
    render()
})


resetBtn.addEventListener('click', (e)=>{
    itemsList = []
    render()
})
function render(){
    list.innerHTML = ''
     itemsList.forEach(element => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('list-item')
        let newSpan = document.createElement('span')
        newSpan.textContent = element
        newDiv.append(newSpan)
        list.append(newDiv)
    });
    localStorage.setItem('todoList', JSON.stringify(itemsList))
}
window.onload =  (e) => {
    itemsList = JSON.parse(localStorage.getItem('todoList'))
    if(itemsList !== null)
    render()
    else itemsList = []
}