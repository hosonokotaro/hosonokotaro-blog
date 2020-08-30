import React from 'react';

const Message: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <p>{props.text}</p>
    </>
  );
};

export default Message;
