import {change} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

function ControlledInput({name, ...otherProps}) {
  const value = useSelector(state => state[name]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(change(name, e.target.value));
  };
  return (
    <input name={name} value={value} placeholder={name} onChange={handleChange} {...otherProps}/>
  )
}

ControlledInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ControlledInput;
