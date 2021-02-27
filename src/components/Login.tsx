import React from 'react';

import { Props as EditProps } from '../pages/edit/useEdit';
import { StyledLogin, StyledUid } from './styledLogin';

const Edit: React.FC<EditProps> = ({ user, login, logout }) => {
  return (
    <StyledLogin>
      {user ? (
        <button onClick={logout}>ログアウトする</button>
      ) : (
        <button onClick={login}>ログインする</button>
      )}
      {user && <StyledUid>uid: {user.uid}</StyledUid>}
    </StyledLogin>
  );
};

export default Edit;
