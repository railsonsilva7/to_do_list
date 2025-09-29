//Estado da applicação
const tarefas = ["Estudar HTML", "Estudar CSS", "Estudar JS"]

//renderiza na tela
const render = () => {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""

    tarefas.forEach((tarefa) => {
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })


}

//adiciona nova tarefa
const add = () =>{
    const input = document.querySelector("input")    
    tarefas.push(input.value)
    input.value = ""
    console.log(tarefas)
    render()
}
render()