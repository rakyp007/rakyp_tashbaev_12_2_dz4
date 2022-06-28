import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUsersAction, getUsersAction } from "../../redux/actions/Action";


function UsersPage () {

    const dispatch  = useDispatch();
    const users = useSelector(state => state.usersReducer.users)

    const getUsers = () => {
        dispatch(getUsersAction())
    }

    const clearUsers = () => {
        dispatch(clearUsersAction)
    }

    return (
        <div>
            <button onClick={getUsers}>ПОСТ ЗОПРОС</button>
            {/* <button onClick={clearUsers}>clear users</button> */}


            {/* <ul>
                
                   
                
                {
                 users.length > 0 
                 ?
                users.map((user,key) => <li>{user.name}</li>)
             :
                <li>Пользователей нет</li>
            }
               
            </ul> */}
        </div>
    )
}

export default UsersPage;