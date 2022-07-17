import './style.scss';
import ControlledInput from "../ControlledInput";
import {useDispatch} from "react-redux";

function SettingsForm() {
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN'});
  }

  return (
    <form className="settingsForm" onSubmit={handleSubmit}>
      <ControlledInput className="settingsForm-input" inputName="email" aria-label="Email" type="email" />
      <ControlledInput className="settingsForm-input" inputName="password" aria-label="Password" type="password" />
      <button className="settingsForm-button" type="submit">Se connecter</button>
    </form>
  )
}

export default SettingsForm;
