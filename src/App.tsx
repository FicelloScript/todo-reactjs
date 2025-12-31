type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id: number;
  text:string;
  priority: Priority
}

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input 
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche..."
          />
          <select 
            className="select w-full"
          >
            
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
