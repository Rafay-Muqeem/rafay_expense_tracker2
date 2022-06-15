import './App.css';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

function App() {
  return (
    <Provider store={Store} >
    <div className="App">
      <Main />
    </div>
    </Provider>
  );
}

export default App;
