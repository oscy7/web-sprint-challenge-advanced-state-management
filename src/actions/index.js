import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const ADD = 'ADD';

console.log('hi')
export const fetchSmurfs = () => (dispatch) =>{
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('MY DATA:',res)
            dispatch({type:SUCCESS, payload: res.data})

        })
        .catch(err=> dispatch({ type: ERROR, payload: err.message}))
}

export const addSmurf = (smurf) => {
    return({type: ADD, payload: smurf})
}

export const errorMessage = () => {
    return({type:ERROR })
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.