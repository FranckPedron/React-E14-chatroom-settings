import {useDispatch} from "react-redux";
import {toggleOpen} from "../../actions";

function SettingsButton() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleOpen())
  }

  return(
  <button className="button" type="button" onClick={handleClick}>X</button>
  )
}

export default SettingsButton;
