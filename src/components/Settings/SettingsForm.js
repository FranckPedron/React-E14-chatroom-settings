import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setPassword} from "../../actions";

function SettingsForm() {
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePassword = (e) => {
    dispatch(setPassword(e.target.value));
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleEmail(e);
  //   handlePassword(e);
  // }

  return (
    <form className="settingsForm">
      <input className="settingsForm-input" aria-label="Email" type="email" placeholder="Email" value={email} onChange={handleEmail} />
      <input className="settingsForm-input" aria-label="Mot de passe" type="password" placeholder="Mot de passe" value={password} onChange={handlePassword} />
      <button className="settingsForm-button" type="submit">Se connecter</button>
    </form>
  )
}

export default SettingsForm;
