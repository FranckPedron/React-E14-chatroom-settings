import {useDispatch, useSelector} from "react-redux";
import {toggleOpen} from "../../actions";
import { X } from "react-feather";

function SettingsButton() {
  const dispatch = useDispatch();
  const open =useSelector(state => state.open);
  const handleClick = () => {
    dispatch(toggleOpen())
  }

  return(
  <button className="settings-toggler" type="button" onClick={handleClick} title={open ? 'Fermer' : 'Ouvrir'}><X /></button>
  )
}

export default SettingsButton;
