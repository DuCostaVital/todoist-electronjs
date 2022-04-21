function adicionarItem (event) {

  if (event && event.keycode !== 13) return;

  const valorInput = document.getElementById("resultado").value
  
  //pegando a tag Ul do nosso HTMl pelo ID
  const minhatagUL = document.getElementById("lista-de-tarefas");

   // Criando tag LI com JavaScript
  const criarTagLi = document.createElement("li");

  // Adicionando um texto para nossa tag li criada
  criarTagLi.innerText = valorInput;

  // Adicionando a tag li para nossa ul
  minhatagUL.appendChild(criarTagLi);

  console.log(criarTagLi);

  
 console.log('Entrou na função');

}