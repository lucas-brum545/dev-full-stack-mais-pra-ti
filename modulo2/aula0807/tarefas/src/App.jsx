import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      texto: "Ir para academia",
      categoria: "Exercicios",
      feito: false
    },
    {
      id: 2,
      texto: "Fazer tarefa do +praTI",
      categoria: "Estudos",
      status: "em andamento",
      feito: false
    },
    {
      id: 3,
      texto: "Limpar a casa",
      categoria: "Diarias",
      feito: true
    }
  ])

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="conteudo">
            <p>{todo.texto}</p>
          </div>
          <div>
            <button>Completar</button>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App
