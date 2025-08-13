//Estado da aplicação
const tarefas = ["Estudar html", "Estudar CSS", "Estudar JS"] //armazena as tarefas incias em uma array

//alteradores da aplicação
function add() { //função que irá adicionar a nova tarefa
    const input = document.querySelector("input") //Cria uma const chamada "input" que armazena o input
    const nova_tarefa = input.value //transfere o valor do input para a const "nova_tarefa"
    tarefas.push(nova_tarefa) //adiciona a nova tarefa a array chamada "tarefas"
    input.value = ""    //limpa o campo "input" após finalizar a função
    render() //renderiza novamente as tarefas pré existentes
}

//renderização
function render() { //função para renderizar as tarefas inciais 
    const ul = document.querySelector("ul") //cria uma const "ul" que armazena a ul
    ul.innerHTML = "" //limpa o valor da ul
    tarefas.forEach(function(tarefa){
        const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)                  
    })          
    }
    
 //iniciar
render()
