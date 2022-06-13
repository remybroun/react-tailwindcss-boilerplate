import logo from './logo.svg';
import { MainRouter } from './MainRouter'
import { persistor, store } from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainRouter/>
      </Provider>
    </div>
  );
}

export default App;
