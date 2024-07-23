import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
          <p>Learn React</p>
      <AddToDo />
      <ToDo />
    </div>
  );
}

export default App;
