import React, { useEffect, useState } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { useUserContext } from '../../context/user_context';
import Button from '../Button';
import { Textarea, useColorModeValue } from '@chakra-ui/react';

const Contact = () => {

  const { currentUser } = useUserContext();
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE);
  const [feedbackText, setFeedbackText] = useState('');

   const bg = useColorModeValue('rgb(255, 255, 255)', 'rgba(171, 122, 95,0.5)');
   const color = useColorModeValue('rgb(40,40,40)','rgb(250,250,250)');


  useEffect(() => {
    if (state.succeeded) {
      setFeedbackText('Thank you for your feedback');
    }
  }, [state]);

  return (
    <Wrapper>
      <div className='section-center'>
        <h3>What did you think of us?</h3>
        <div className='content'>
          <div className='feedback-info'>
            {feedbackText && <p className='success-text'>{feedbackText}</p>}
            <p>
              Customer satisfaction is our top-most priorty. Today were are here
              only due to your trust and support, and our constant efforts to
              make the platform better everyday. Please provide your valuable
              feedback, and help the platform grow.
            </p>
          </div>
          <form className='contact-form' onSubmit={handleSubmit}>
            {currentUser && (
              <input
                type='email'
                name='email'
                className='form-input form-input-muted'
                value={currentUser.email}
                readOnly
              />
            )}
            <Textarea
              name='feedback'
              className='form-input'
              placeholder='Your feedback'
              required
              bg={bg}
              color={color}
            />
            {currentUser ? (
              <Button
                type='submit'
                className='btn submit-btn'
                disabled={state.submitting}
              >
                send feedback
              </Button>
            ) : (
              <Link to='/login' className='btn submit-btn'>
                login
              </Link>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
