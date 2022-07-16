import SettingsButton from "./SettingsButton";
import SettingsForm from "./SettingsForm";
import './style.scss';

function Settings() {
  return (
    <div className="settings">
      <SettingsButton />
      <SettingsForm />
    </div>
  )
}

export default Settings;
