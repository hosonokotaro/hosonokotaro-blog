import React from 'react';

import { Props as EditProps } from '~/pages/edit/useLogin';

import { StyledLogin, StyledUid } from './styledLogin';

const Login: React.FC<EditProps> = ({ user, login, logout }) => {
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

export default Login;
