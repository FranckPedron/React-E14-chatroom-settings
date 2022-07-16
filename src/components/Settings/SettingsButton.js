import {useDispatch} from "react-redux";
import {toggleOpen} from "../../actions";
import { X } from "react-feather";

function SettingsButton() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleOpen())
  }

  return(
  <button className="button" type="button" onClick={handleClick} title="Fermer"><X /></button>
  )
}

export default SettingsButton;
