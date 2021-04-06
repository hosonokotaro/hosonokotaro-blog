import React from 'react';

import type { Props } from '~/pages/edit/useLogin';

import { StyledLogin, StyledUid } from './styledLogin';

const Login: React.FC<Props> = ({ user, login, logout }) => {
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
