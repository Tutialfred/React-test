import './App.css';

// Components ↓
import { Welcome } from './components/Welcome';
import { TaskTable } from './components/Task/TaskTable';



function App() {
  return (
    <div>
      <h1 className='bg-secondary p-3'>Alfredo zavala → Developer Frontend</h1>
      <Welcome />
      <hr/>
      <TaskTable/>
    </div>
  );
}

export default App;
