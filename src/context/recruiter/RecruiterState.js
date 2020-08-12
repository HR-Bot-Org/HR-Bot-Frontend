import React, { useReducer } from 'react';
import RecruiterReducer from './recruiterReducer';
import recruiterContext from './recruiterContext';
import axios from 'axios';
import { APPEND } from '../types';
const RecruiterState = (props) => {
  const initialState = {
    questions: [],
  };

  const [state, dispatch] = useReducer(RecruiterReducer, initialState);
  const getQuestionsOfSkills = (arrayOfSKillIds) => {
    console.log(localStorage.getItem('token'));
    axios
      .get(`${process.env.REACT_APP_HOST_NAME}/api/recruiter/questions`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params: { skills: arrayOfSKillIds },
      })
      .then((res) => {
        console.log('result:', res);

        dispatch({
          type: APPEND,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log('hey', err.response.data.message);
      });
  };
  return (
    <recruiterContext.Provider
      value={{
        questions: state.questions,
        getQuestionsOfSkills,
      }}
    >
      {props.children}
    </recruiterContext.Provider>
  );
};

export default RecruiterState;
