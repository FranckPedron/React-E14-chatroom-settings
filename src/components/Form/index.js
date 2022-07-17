import {useDispatch, useSelector} from "react-redux";
import {addMessage, showError, writeMessage} from "../../actions";
import { Send } from 'react-feather'
import './style.scss';
import {useEffect, useRef} from "react";

function Form() {
  const inputRef = useRef();
  const currentMessage = useSelector(state => state.currentMessage);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(writeMessage(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.length === 0) {
      dispatch(showError('Un message ne peut être vide'))
    }
    else if (currentMessage.trim().length === 0) {
      dispatch(showError('Un message ne peut contenir uniquement des espaces'))
    }
    else {
      dispatch(addMessage());
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form-input" ref={inputRef} type="text" placeholder="Saisissez votre message" aria-label="Message" value={currentMessage} onChange={handleChange} />
      <button className="form-button" onClick={handleSubmit} type="submit" aria-label="Envoyer" ><Send size="30" /></button>
    </form>
  )
}

export default Form;
