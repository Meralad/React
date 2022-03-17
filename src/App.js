import { Hi, Content, Baby, Exp, ThatIsIt } from './Tasks/Task1';
import Admin from './Tasks/Task2';
import User from './Tasks/state';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Tasks/pages/LoginPage';
import RegisterPage from './Tasks/pages/RegisterPage';


function App() {
  return (
    <div>
       <Routes>
         <Route path='/' element={<LoginPage />}/>
         <Route path='register' element={<RegisterPage />}/>
       </Routes>
       {/* <User />
       <Hi/>
       <Content/>
       <Baby/>
       <Exp/>
       <ThatIsIt/>
       <Admin name={'Max'} age={28} animal={(dog) => dog} /> */}
    </div>
  );
}

export default App;
