import React from 'react';

import s from '../Dialogs.module.css'

const Message = props => {
  const { message } = props;
  return (
    <div className={s.message}>
      { message }
    </div>
  )
}

export default Message;
