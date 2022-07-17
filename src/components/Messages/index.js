import Message from "../Message"
import {useSelector} from "react-redux";
import './style.scss';
import {useEffect, useRef} from "react";


function Messages() {
  const messagesRef = useRef();
const listMessages = useSelector(state => state.messages);
  useEffect(() => {
    messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
  }, [listMessages]);

  return (
    <section className="messages" ref={messagesRef}>
      {listMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.author} />
        )}
    </section>
  )
}

export default Messages;
