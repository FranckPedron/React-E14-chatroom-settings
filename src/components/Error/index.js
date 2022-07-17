import './style.scss';
import {useSelector} from "react-redux";

function Error() {
  const errorMessage = useSelector(state => state.errorMessage)
  return(
    <p className="error">{errorMessage}</p>
  )
}

export default Error;
