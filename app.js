
// This function is utilized for adding todo list input value into list on html

function addTodoList()
{
  
  var valueFromInput = document.getElementById('input').value;
  document.getElementById('input').innerText = ' ';
  console.log(valueFromInput)
  var funcInVar = appendTodoList(valueFromInput);
  
  var htmlBody = document.getElementById('body')
  var ulTag = htmlBody.querySelector('.todo-list');
  console.log(ulTag)
  ulTag.innerHTML+=funcInVar;

  
}

function appendTodoList(valueFromInput)
{
  return `
  
  
    <div class="todo-p-div">
      <p>${valueFromInput}</p>
    </div>

    <div class="todo-list-button-div">
      <button type="button">edit</button>
      <button type="button">update</button>
      <button type="button">delete</button>
    </div>

  
  `
}