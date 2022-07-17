import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Chat from 'src/components/Chat';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <Chat />
  </Provider>
);

const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
