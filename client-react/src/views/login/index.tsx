import React, { useState } from 'react';
import {
  Input,
  Button,
} from '@ilinmu/atom';

import { ButtonType } from '@ilinmu/atom/dist/components/Button/button';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    console.log('account', account);
    console.log('password', password);
  }
  return (
    <div className="login">
      <Input placeholder="请输入账号" onChange={handleChangeAccount} value={account} />
      <Input type="password" onChange={handleChangePassword} value={password} placeholder="请输入密码" />
      <Button type={ButtonType.Primary} onClick={handleLogin}>登录</Button>
    </div>
  );
}

export default Login;
