import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const restInput = useRef(null)
  const addTask = () => {
    newTask.trim() !== '' &&
      setTasks([
        ...tasks,
        {
          name: newTask,
          id: tasks.length === 0 ? 1 : tasks.length + 1,
          isComplete: false,
        },
      ])
    restInput.current.value = ''
    setNewTask('')
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: true }
        } else {
          return task
        }
      })
    )
  }

  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      e.key === 'Enter' && addTask()
    })
  }, [addTask])

  return (
    <div className='App'>
      <h1 className='heading'>Todo List</h1>
      <div className='addTask'>
        <input
          type='text'
          onChange={(e) => {
            setNewTask(e.target.value)
          }}
          ref={restInput}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {tasks.map((task) => (
          <Task
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
            key={task.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
