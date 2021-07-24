import React from 'react';

import useSession from '~/customHooks/useSession';

import { StyledLogin, StyledUid } from './styledIndex';

const Login: React.FC = () => {
  const { userId, login, logout } = useSession();

  return (
    <StyledLogin>
      {userId && <button onClick={logout}>ログアウトする</button>}
      {!userId && <button onClick={login}>ログインする</button>}
      {userId && <StyledUid>uid: {userId}</StyledUid>}
    </StyledLogin>
  );
};

export default Login;
