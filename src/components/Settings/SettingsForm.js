import './style.scss';
import ControlledInput from "../ControlledInput";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {saveUser, showError} from "../../actions";

function SettingsForm() {
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      })
       const {pseudo} = result.data;
    dispatch(saveUser(pseudo));
    }
    catch (err) {
      dispatch(showError(`Mauvais email ou password`));
    }
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
