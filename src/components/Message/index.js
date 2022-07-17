import PropTypes from "prop-types";
import './style.scss';
import {useSelector} from "react-redux";
import {getIsMine} from "src/selectors";
import classNames from "classnames";

function Message({ content, author }) {
const isMine = useSelector(getIsMine(author));

  return (
    <article className={classNames('message', { 'message--is-mine': isMine })}>
      <h2 className="message-author">{author}</h2>
      <p className="message-content">{content}</p>
    </article>
  );
}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

export default Message;
