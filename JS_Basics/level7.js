const title = document.getElementById('title');
const buttonAdd = document.getElementById('buttonAdd');
const buttonMinus = document.getElementById('buttonMinus');

let count = 0;

function render(){
  title.textContent = count;
}

buttonAdd.addEventListener('click', () =>{
  count++;
  render();
});

buttonMinus.addEventListener('click', () =>{
  count--;
  render();
});

render();


const input = document.getElementById('input');
const add = document.getElementById('Add');
const todo = document.getElementById('todo');

add.onclick = () =>{
  text = input.value.trim();

  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  todo.appendChild(li);

  input.value = '';
}