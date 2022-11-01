import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { useUserContext } from '../../context/user_context';
import { Link, useHistory } from 'react-router-dom';
import useMounted from '../../hooks/useMounted';
import { toast } from 'react-toastify';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string()  .min(8, 'Password is too short - should be 8 chars minimum.').matches(/^[A-Za-z]+$/i, 'Password can only contain Latin letters.'),
  age: yup.number().positive().integer().required(),
  firstname: yup.string().min(2).matches(/^[A-Za-z]+$/i,"no special characters allowed").required(),
  lastname: yup.string().min(2).required(),
  address: yup.string().matches(/^[A-Za-z]+$/i,"no special characters allowed").required(),
  city: yup.string().max(13).required(),
  postalCode: yup.string().max(5).required(),
  contact: yup.string().max(13).required(),
  userType: yup.string().required(),
});

function RegisterPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    validationSchema: schema
  });
  const history = useHistory();
  const mounted = useMounted();
  const { createUser } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const onSubmit = (data) => {


    if (data.password !== data.confirmpwd) {
      return toast.error("Passwords didn't match");
    }

    setIsSubmitting(true);
    createUser(data)
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => mounted.current && setIsSubmitting(false));
  };

  function togglePasswordVisibility() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  function toggleConfirmPasswordVisibility() {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  }

  useEffect(() => {
    document.title = 'Tomper Wear | Register';
  }, []);

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className='form-control'>
            <div >

            <input
              type='text'
              name='firstname'
              className='input'
              placeholder='First Name'
              {...register("firstname", { required: true })}
              />

               <input
              type='text'
              name='lastname'
              className='input'
              placeholder='lastname'
              {...register("lastname", { required: true })}
              
              />
              </div>
          </div>
          {/* end email */}
          {/* pass */}
          <div className='form-control password'>
         
            <input
              type='email'
              name='email'
              className='input'
              placeholder='email'
              {...register("email", { required: true })}

            />
            <input
              type='text'
              name='country'
              className='input'
              placeholder='country'
              {...register("country", { required: true })}

            />
            <input
              type='text'
              name='city'
              className='input'
              placeholder='city'
              {...register("city", { required: true })}

            />
            <input
              type='Number'
              name='age'
              className='input'
              placeholder='age'
              {...register("age", { required: true })}

            />
            <input
              type='text'
              name='postalCode'
              className='input'
              placeholder='postalCode'
              {...register("postalCode", { required: true })}

            />
            <input
              type='text'
              name='contact'
              className='input'
              placeholder='contact'
              {...register("contact", { required: true })}

            />
            <input
              type='text'
              name='address'
              className='input'
              placeholder='address'
              {...register("address", { required: true })}

            />
            <select {...register("userType")}>
              <option value="female">client</option>
              <option value="male">company</option>
            </select>


            <div onClick={togglePasswordVisibility} className='togglebtn'>
              {!isVisiblePassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </div>
          </div>
          <div className='form-control password'>
            <input
              type={!isVisibleConfirmPassword ? 'password' : 'text'}
              name='password'
              className='input'
              placeholder='password'
              {...register("password", { required: true })}

            />
            <input
              type={!isVisibleConfirmPassword ? 'password' : 'text'}
              name='confirmPassword'
              className='input'
              placeholder='Confirm Password'

              {...register("confirmpwd", { required: true })}
            />

            <div
              onClick={toggleConfirmPasswordVisibility}
              className='togglebtn'
            >
              {!isVisibleConfirmPassword ? (
                <BsFillEyeSlashFill />
              ) : (
                <BsFillEyeFill />
              )}
            </div>
          </div>
          {/* end pass */}
          <Button
            type='submit'
            className='btn register-btn'
            disabled={isSubmitting}
          >
            register
          </Button>
          {/* links */}
          <div className='links'>
            <Link to='/login' className='link'>
              login
            </Link>
          </div>
          {/* end links */}
          
        
        </form>
      </div>
    </Wrapper>
  );
}

export default RegisterPage;
