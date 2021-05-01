import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types'
import axios from 'axios';

const URL = 'https://system-logs.herokuapp.com';

//Get techs from server
export const getTechs = () => async dispatch =>{
  try {
    setLoading();

    await axios.get(`${URL}/techs`).then(res => {
      dispatch({
        type: GET_TECHS,
        payload: res.data
      })
    })
  } catch(err){
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Add tech to server
export const addTech = (tech) => async dispatch => {
  try {
    setLoading();
    await axios.post(`${URL}/techs`, tech ).then(res => {
      dispatch({
        type: ADD_TECH,
        payload: res.data
      })
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    })
  }
}

// Delete tech from server
export const deleteTech = (id) => async dispatch => {
  try {
    setLoading();
    await axios.delete(`${URL}/techs/${id}`).then(
      dispatch({
        type: DELETE_TECH,
        payload: id
      })
    );
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};