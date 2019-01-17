
// This function is utilized for adding todo list input value into list on html

function addTodoList()
{
  
  var valueFromInput = document.getElementById('input').value;
  document.getElementById('input').innerText = ' ';
  console.log(valueFromInput)
  var funcInVar = appendTodoList(valueFromInput);
  
  var ulTag = document.getElementById('ul');

  ulTag.innerHTML+=funcInVar;


}

function appendTodoList(valueFromInput)
{
  return `
  <li><p id="list-text">${valueFromInput}</p>
  </li><button type="button">edit</button>
  <button type="button">update</button>
  <button type="button">delete</button>
  `
}