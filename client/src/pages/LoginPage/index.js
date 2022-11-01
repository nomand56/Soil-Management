import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { useUserContext } from '../../context/user_context';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useMounted from '../../hooks/useMounted';
import { toast } from 'react-toastify';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Button from '../../components/Button';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const mounted = useMounted();
  const { login,token,loading,error} = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);



  };
  
  function togglePasswordVisibility() {
    setVisible(!visible);
  }

  useEffect(() => {
    document.title = 'Green Waste Company| Login';
  }, []);

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}
          {/* pass */}
          <div className='form-control password'>
            <input
              type={!visible ? 'password' : 'text'}
              name='password'
              className='input'
              placeholder='Password'
              value={password}
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={togglePasswordVisibility} className='togglebtn'>
              {!visible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </div>
          </div>
          {/* end pass */}
          {/* links */}
          <div className='links'>
            <Link to='/forgot-password' className='link'>
              forgot password?
            </Link>
            <Link to='/register' className='link'>
              register
            </Link>
          </div>
          {/* end links */}
          <Button
            type='submit'
            className='btn login-btn'
            disabled={isSubmitting}
          >
            login
          </Button>
         
        </form>
      </div>
    </Wrapper>
  );
}

export default LoginPage;
