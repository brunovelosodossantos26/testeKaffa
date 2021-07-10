//obtendo todos os elementos necessários
const inputBox = document.querySelector(".inputField input") 
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todoList") 
const deleteAllBtn = document.querySelector(".footer button") 

inputBox.onkeyup = () => {
    let userData = inputBox.value; //obter o valor inserido pelo usuário
    if(userData.trim() != 0){//se os valores do usuário não são apenas espaços
        addBtn.classList.add("active");//ativa o botão adicionar
    }else{
        addBtn.classList.remove("active");//desative o botão adicionar
    }

}

showTasks();

addBtn.onclick = () =>{
    let userData = inputBox.value; //obter o valor inserido pelo usuário
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData)
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transformando o objeto js em uma string json
    showTasks();
    addBtn.classList.remove("active");//desative o botão adicionar
}

//função para adicionar lista de tarefas dentro de ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo")
    if(getLocalStorage == null){
        listArr = []
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb")
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active")
    }else{
        deleteAllBtn.classList.remove("active")
    }

    let newLiTag= '';
    listArr.forEach((element, index)=>{
    newLiTag += ` <li>${element}<span onclick="deleteTask(${index})" ><i class="fas fa-trash"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = ""
}

//excluir função de tarefa
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);//exclua ou remova o li indexado particular
    //depois de remover o li novamente atualize o armazenamento local
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transformando o objeto js em uma string json
    showTasks();
}

//função para excluir todas as tarefas
deleteAllBtn.onclick = () => {
    listArr = [];

    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transformando o objeto js em uma string json
    showTasks();
}