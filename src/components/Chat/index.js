import Messages from '../Messages';
import Form from '../Form';
import Error from "../Error";
import Settings from "../Settings";
import './style.scss';
import {useSelector} from "react-redux";

function Chat() {
  const displayError = useSelector(state => state.displayError);

  return (
    <div className="app">
      <Settings />
      <Messages />
      {displayError && <Error />}
      <Form />
    </div>
  )
}

export default Chat;
