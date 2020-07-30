import React from 'react';

// components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import s from './Dialogs.module.css'

const Dialogs = ({
  dialogs,
  messages,
  newMessageBody,
  onNewMessageChange,
  onSendMessageClick,
}) => {

  const dialogElements = dialogs.map(elem => {
    const { name, id } = elem;
    return (
      <DialogItem
        key={id}
        name={name}
        id={id}
      />
    )
  })

  const messageElements = messages.map(elem => {
    const { message, id } = elem;
    return (
      <Message
        key={id}
        message={message}
        id={id}
      />
    )
  })

  const onNewMessageChangeHandler = (e) => {
    const message = e.target.value;
    onNewMessageChange(message);
  }

  const onSendMessageClickHandler = () => {
    onSendMessageClick();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        {dialogElements}
      </div>
      <div className={s.messages__container}>
        <div className={s.messages}>
          {messageElements}
          <div>
            <textarea
              className={s.messageTextarea}
              placeholder='Enter your message'
              value={newMessageBody}
              onChange={onNewMessageChangeHandler}
            ></textarea>

            <div>
              <button
                className={s.but}
                onClick={onSendMessageClickHandler}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
