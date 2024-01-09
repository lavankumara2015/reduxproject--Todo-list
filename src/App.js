import { useDispatch } from 'react-redux';
import './App.css';
import TodoComponent from './components/todoComponent';






function App() {
 
  const dispatch = useDispatch();

  return(
   <TodoComponent/>
  )
}

export default App;
