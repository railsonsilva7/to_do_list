//Estado da applicação
const tarefas = ["Estudar HTML", "Estudar CSS", "Estudar JS"]

//renderiza na tela
function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    
    tarefas.forEach(function(tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
        console.log(li)
    })
}

//adiciona nova tarefa
function add() {
    const input = document.querySelector("input")    
    tarefas.push(input.value)
    input.value = ""
    console.log(tarefas)
    render()
}
render()