import SettingsButton from "./SettingsButton";
import SettingsForm from "./SettingsForm";
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions";

function Settings() {
  const open = useSelector(state => state.open);
  const logged = useSelector(state => state.logged);
  const pseudo = useSelector(state => state.pseudo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={`settings ${open ? '' : 'settings--close'}`}>
      <SettingsButton />
      {!logged && <SettingsForm/>}
      {logged && (
        <div>
          <p>Bienvenue {pseudo}</p>
          <button type="button" className="settingsForm-button" onClick={handleLogout}>Se déconnecter</button>
        </div>
      )}
    </div>
  )
}

export default Settings;
