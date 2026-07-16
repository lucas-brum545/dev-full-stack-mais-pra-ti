// import { useState } from "react";

// As Props (abreviação de properties) são a forma como os componentes no React comunicam entre si. Pense nelas como os argumentos de uma função ou os parâmetros de um componente
// {...}

// export default function App() {
//   const [tarefas, setTarefas] = useState([
//     { id: 1, texto: "Aprender sobre Props", concluida: true },
//     { id: 2, texto: "Entender useState", concluida: false },
//     { id: 3, texto: "Estudar Web Components", concluida: false },
//   ]);

//   function adicionarTarefa() {
//   // Lógica para adicionar uma nova tarefa
//   const novaTarefa = { id: tarefas.length + 1, texto: "Nova Tarefa", concluida: false };
//   tarefas.push(novaTarefa);
//   setTarefas([...tarefas, novaTarefa]);

//   console.log("Adicionar nova tarefa");
// }

// function removerTarefa() {
//   // Lógica para remover uma tarefa
//   tarefas.pop();
//   setTarefas([...tarefas]);
//   console.log("Remover tarefa");
// }

// function editarTarefa() {
//   // Lógica para editar uma tarefa
//   tarefas[0] = { ...tarefas[0], texto: "Tarefa Editada" };
//   setTarefas([...tarefas]);
//   console.log("Editar tarefa");
// }
  

//   return (
//     <div>
//       <ul>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id}>{tarefa.texto}</li>
//         ))}
//       </ul>
//       {/* Adicione aqui o botão para adicionar uma nova tarefa */}
//       <button onClick={adicionarTarefa}>Adicionar tarefa</button>
//       <button onClick={removerTarefa}>Remover tarefa</button>
//       <button onClick={editarTarefa}>Editar tarefa</button>
//     </div>
//   );
// }

import { useState } from "react"

function Saudacao({nome}){
  return <h2>Olá {nome} seja bem-vindo(a)!</h2>
}

export default function App(){

  const [contador, setContador] = useState(0)


  return (<div>
    <Saudacao nome="Lucas"/>  // funcao pode ser usada como tag html metatag

    <p>
      {contador}
    </p>

    <button onClick={() => setContador(contador+1)}>
      Somar +1
    </button>
    </div>);
  
}