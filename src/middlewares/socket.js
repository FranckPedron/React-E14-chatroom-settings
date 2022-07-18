import {WS_CONNECT} from "../actions";

const socketMW = (store) => (next) => (action) => {
  switch (action.type) {

    case WS_CONNECT: {
      const socket = window.io('http://localhost:3001/');
      socket.on('server_message', message => console.log(message));

      break;
    }
    default:
      next(action);
  }
}

export default socketMW;
