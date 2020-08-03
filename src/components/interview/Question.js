import React, { useState } from 'react';
import TTS from './TTS';

const Question = (props) => {
  // 0 not spoke , 1 spoken
  const [flag, setFlag] = useState(props.question.id);

  return (
    <div>
      <form>
        <div className='form-group green-border w-50'>
          <label htmlFor='exampleFormControlTextarea5 '>
            Question{props.question.id}
          </label>

          <textarea
            className='form-control'
            id='exampleFormControlTextarea5'
            rows='3'
            value={props.question.body}
            disabled
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Question;
