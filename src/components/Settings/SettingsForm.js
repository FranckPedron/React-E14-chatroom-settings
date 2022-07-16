import './style.scss';
import ControlledInput from "../ControlledInput";

function SettingsForm() {
  return (
    <form className="settingsForm">
      <ControlledInput className="settingsForm-input" name="email" aria-label="Email" type="email" />
      <ControlledInput className="settingsForm-input" name="password" aria-label="Password" type="password" />
      <button className="settingsForm-button" type="submit">Se connecter</button>
    </form>
  )
}

export default SettingsForm;
