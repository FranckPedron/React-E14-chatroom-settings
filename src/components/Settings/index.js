import SettingsButton from "./SettingsButton";
import SettingsForm from "./SettingsForm";
import './style.scss';
import {useSelector} from "react-redux";

function Settings() {
  const open = useSelector(state => state.settings)
  return (
    <div className="settings">
      <SettingsButton />
      {(open === 'open') && <SettingsForm/>}
    </div>
  )
}

export default Settings;
