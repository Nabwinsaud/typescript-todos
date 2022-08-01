"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("input");
// const input = document.getElementById("input");
const todoForm = document.querySelector("form");
const todoList = document.getElementById("todolist");
// const todos: Todo[] = [];
const getTodos = () => {
    const jsonTodo = localStorage.getItem("todos");
    // we can just fix error either by ! or if checkin null
    // const jsonTodo = localStorage.getItem("todos")!;
    if (jsonTodo === null)
        return [];
    return JSON.parse(jsonTodo);
    // console.log(JSON.parse(jsonTodo))
};
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
// now we can read the todos
const todos = getTodos();
// still we are not getting the data in browser while refreshing so we need to loop over data of function creatTodo
// todos.forEach(createTodo);
todos.map(createTodo);
// either use  map or for each it will work because map or foreach return a function its already a function
const handleSubmit = (e) => {
    e.preventDefault();
    // making the object
    const newTodo = {
        text: input.value,
        completed: false,
    };
    // we are calling the function to createTodos
    createTodo(newTodo);
    todos.push(newTodo);
    // const newInput: string | number = input.value;
    // const newLi = document.createElement("li");
    // // we want the checkbox in every child i.e li so that we can check (....complete or not ....)
    // const checkbox = document.createElement("input")! as HTMLInputElement; //  ! as  really not necessary
    // checkbox.type = "checkbox"; // we are making the input type of checkbox
    // // as we know there are lots of input type such as checkbox,text,number ....
    // // we are dynamically adding checkbox to every todoInput i.e li
    // // dont't be confuse you can name the variable <checkbox> to any like check but type should be type="checkbox"
    // newLi.append(checkbox);
    // newLi.append(newInput);
    // todoList.append(newLi);
    // console.log(todoList);
    // console.log(newInput);
    // clear when we submit the form
    //  we are storing the value of arr of object in local storage
    // localStorage.setItem("todos", JSON.stringify(todos));
    saveTodos();
    input.value = "";
};
function createTodo(todo) {
    // const newInput: string | number = input.value; // we no longer need newInput
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input"); //  ! as  really not necessary
    checkbox.type = "checkbox"; // we are making the input type of checkbox
    checkbox.checked = todo.completed; // checking the previous state and then switch
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(checkbox);
    // newLi.append(newInput); simply we can do todo.value
    newLi.append(todo.text);
    todoList.append(newLi);
    // console.log(todoList);
}
todoForm.addEventListener("submit", handleSubmit);
