import './style.scss';

function SettingsForm() {
  return (
    <form className="settingsForm">
      <input className="settingsForm-input" type="text" placeholder="Email" />
      <input className="settingsForm-input" type="text" placeholder="Mot de passe"/>
      <button className="settingsForm-button" type="submit">Envoyer</button>
    </form>
  )
}

export default SettingsForm;
