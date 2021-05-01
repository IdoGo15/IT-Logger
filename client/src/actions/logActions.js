import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS, FILTER_BY_TECH } from './types';
import axios from 'axios';

const URL = 'https://system-logs.herokuapp.com';

// Get Logs from server
export const getLogs = () => async dispatch => {
    try {
      setLoading();
      const res = await axios.get(`${URL}/logs`);
      dispatch({
        type: GET_LOGS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      })
    }
};

//Add new log
export const addLog = (log) => async dispatch => {
  try {
    setLoading();
    await axios.post(`${URL}/logs`, log ).then(res => {
      dispatch({
        type: ADD_LOG,
        payload: res.data
      })
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
};

//Delete Log from server
export const deleteLog = (id) => async dispatch => {
  try {
    setLoading();
    await axios.delete(`${URL}/logs/${id}`).then(
      dispatch({
        type: DELETE_LOG,
        payload: id
      })
    );
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    })
  }
};

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    axios.put(`${URL}/logs/${log._id}`, log).then(
      dispatch({
        type: UPDATE_LOG,
        payload: log
      })
    );
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server logs
export const searchLogs = (text) => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(`${URL}/logs/?q=${text}`);
    dispatch({
      type: SEARCH_LOGS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    })
  }
};

// Filter server logs by technican
export const filterByTechnican = (tech) => async dispatch => {
  console.log(tech);
  try {
    
    setLoading();
    const res = await axios.get(`${URL}/logs/?tech=${tech}`);
    dispatch({
      type: FILTER_BY_TECH,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    })
  }
};

//Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

//Clear current log
export const clearCurrent= () => {
  return {
    type: CLEAR_CURRENT
  }
}

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};