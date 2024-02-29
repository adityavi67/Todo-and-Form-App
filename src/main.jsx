import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
