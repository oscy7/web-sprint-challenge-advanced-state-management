import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const ADD = 'ADD';

export const fetchSmurfs = () => (dispatch) =>{
    dispatch(loading())
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch(success(res.data))
        })
        .catch(error=> dispatch({ type: ERROR, payload: error.message}))
}

export const addSmurf = (smurf)=>(dispatch) => {
    axios({
        method: 'post',
        url: 'http://localhost:3333/smurfs',
        data: smurf
      })
      .then(res => {
          dispatch({type: ADD, payload: smurf})
      })
      .catch(error=>{
        dispatch({type:ERROR, payload: error.message})
      })
    }

export const loading = () => {
    return({type: LOADING})
}
export const success = (smurf) => {
    return({type:SUCCESS, payload: smurf})
}
export const errorMessage = (error) => {
    return({type:ERROR, payload: error })
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.