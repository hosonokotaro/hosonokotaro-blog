import React from 'react';

import Button from '@/atoms/Button';
import useSession from '~/customHooks/useSession';

import { StyledLogin, StyledUid } from './styledIndex';

const Login: React.FC = () => {
  const { userId, login, logout } = useSession();

  return (
    <StyledLogin>
      {userId && <Button text="ログアウトする" onClick={logout} />}
      {!userId && <Button text="ログインする" onClick={login} />}
      <StyledUid>uid: {userId}</StyledUid>
    </StyledLogin>
  );
};

export default Login;
