import { Hi, Content, Baby, Exp, ThatIsIt } from './Tasks/Task1';
import Admin from './Tasks/Task2';
import User from './Tasks/state';

function App() {
  return (
    <div>
      <User />
      {/* <Hi/>
       <Content/>
       <Baby/>
       <Exp/>
       <ThatIsIt/>
       <Admin name={'Max'} age={28} animal={(dog) => dog} /> */}
    </div>
  );
}

export default App;
