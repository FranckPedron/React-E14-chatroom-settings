import Messages from '../Messages';
import Form from '../Form';
import Error from "../Error";
import Settings from "../Settings";
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {wsConnect} from "../../actions";

function Chat() {
  const displayError = useSelector(state => state.displayError);
  const dispatch = useDispatch();

  useEffect(()=>{dispatch(wsConnect())},[]);

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
