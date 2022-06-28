import { types } from '../../types'

export const changeTextAction = () => {
  return {
    type: types.CHANGE_TEXT
  }
}


export const clearTextAction = () => {
  return {
    type: types.CLEAR_TEXT
  }
}


export function handleTextAction () {
    return function (dispatch) {
        dispatch(changeTextAction());

        setTimeout(() => {
          dispatch(clearTextAction())
        },3000)
    }
}



export const usersAction = (users) => {
  return {
    type: types.POST_USERS,
    payload: users
  }
}


export const clearUsersAction = () => {
  return {
    type: types.CLEAR_USERS
  }
}


const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'React POST Request Example' })
};



export const getUsersAction = () => {
 return async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users',requestOptions);

  const data  = await response.json();

 console.log(usersAction(data)); 

}
}
