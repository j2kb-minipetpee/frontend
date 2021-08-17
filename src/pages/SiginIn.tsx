import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { login } from '../store/auth';

export const SignIn = () => {
  // useEffect(() => {
  //   AuthService.siginin({ email, pass });
  // }, []);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    email: '',
    pw: '',
    id: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    dispatch(login({ name: 'inkyu', email: 'inkyu', id: 123132 }));
    localStorage.setItem('accessToken', '123123');
    history.push('/');
  };

  return (
    <div>
      <label>
        Email
        <input type="text" id="email" onChange={handleChange} value={userInput.email}></input>
      </label>
      <label>
        Pw
        <input type="password" id="pw" onChange={handleChange} value={userInput.pw}></input>
      </label>
      <button onClick={handleClick}>로그인</button>
    </div>
  );
};
