import { useState } from 'react';
import axios from 'axios';

function TasksPage() {
  const [task, setTask] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/tasks', {
        task,
      });

      setTask('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add a new task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TasksPage;