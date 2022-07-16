import SettingsButton from "./SettingsButton";
import SettingsForm from "./SettingsForm";
import './style.scss';
import {useSelector} from "react-redux";

function Settings() {
  const open = useSelector(state => state.open)
  return (
    <div className={`settings ${open ? '' : 'settings--close'}`}>
      <SettingsButton />
      <SettingsForm/>
    </div>
  )
}

export default Settings;
