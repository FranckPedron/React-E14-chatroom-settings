import {addMessage, SEND_MESSAGE, WS_CONNECT} from "../actions";

let socket;

const socketMW = (store) => (next) => (action) => {
  switch (action.type) {

    case WS_CONNECT: {
      socket = window.io('http://localhost:3001/');
      socket.on('server_message', message => store.dispatch(addMessage(message)));
      break;
    }

    case SEND_MESSAGE: {
      const {pseudo, currentMessage} = store.getState();
      socket.emit('client_message', {author: pseudo, content: currentMessage});
      break;
    }

    default:
      next(action);
  }
}

export default socketMW;
