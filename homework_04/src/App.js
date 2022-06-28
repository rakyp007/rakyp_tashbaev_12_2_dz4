import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TitlePage from './page/titlepage/TitlePage';
import UsersPage from './page/usersPage/UsersPage';
import { handleTextAction } from './redux/actions/Action';


function App() {
//  const title = useSelector(state => state.titleReducer.title)
//  const dispatch = useDispatch() 

//  const handleText =() => {
//   dispatch(handleTextAction)
//  }

 return (
    <div className="App">
     {/* {title}
     <button onClick={handleText}>change text</button> *

     {/* <TitlePage/> */}


     <UsersPage/>
    </div>
  );
}

export default App;

