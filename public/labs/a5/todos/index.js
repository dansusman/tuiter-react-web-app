import TodoList from "./TodoList.js";
// alert("hello world")

$("#wd-todo").append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);
