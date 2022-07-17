import {changeValue} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

function ControlledInput({inputName, ...otherProps}) {
  const value = useSelector(state => state[inputName]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeValue(inputName, e.target.value));
  };

  return (
    <input name={inputName} value={value} placeholder={inputName} onChange={handleChange} {...otherProps}/>
  )
}

ControlledInput.propTypes = {
  inputName: PropTypes.string.isRequired,
};

export default ControlledInput;
