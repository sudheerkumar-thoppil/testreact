
import './App.css';
import AddTask from './components/AddTask';
import Contact from './components/Contact';
import ListTask from './components/ListTask';
import Todo from './components/Todo';
import todo from './components/Todo.css';

function App() {
  return (
    <>
    
    <div >
      <p>Shopper</p>
      <Contact/>
      <Todo/>
      <AddTask/>
      <ListTask/>
     </div>
    </>
    
  );
}

export default App;
