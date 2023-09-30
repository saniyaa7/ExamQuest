
import './App.css';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Header from './Header';
import Create_Panel from './Create_Panel';
import Branch_Wise from './Branch_Wise';
import DataDisplay from './DataDisplay';
import Registration from './Registration';
import Card from './Card';
import Sem from './Sem';
import Screen from './Screen';
import Intro from './Intro';
import COE from './COE';
import Email from './Email';


function App() {
 
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Header/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Branch_Wise' element={<Branch_Wise/>}></Route>
    <Route path='/create_panel' element={<Create_Panel/>}></Route>
    <Route path='/sem' element={<Sem/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/coe' element={<COE/>}></Route>
    <Route path='/email' element={<Email/>}></Route>
    
    </Routes></BrowserRouter>
    
  // <div>
  //   {/* <Registration/> */}
  //   {/* <Home/> */}
  //   {/* <Card/> */}
  //   <Sem/>
  // </div>
  );
}

export default App;
