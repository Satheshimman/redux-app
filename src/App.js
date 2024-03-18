import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Routing } from './component-2/Routing';
import { Store } from './component-2/Store';

function App() {
  return (
    <div>
       <Provider store={Store}>
          <Routing/>
       </Provider>
    </div>
  );
}

export default App;
