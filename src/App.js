import { Hi, Content, Baby, Exp, ThatIsIt } from './Tasks/Task1';
import Admin from './Tasks/Task2';

function App() {
  return (
    <div>
      <Hi/>
      <Content/>
      <Baby/>
      <Exp/>
      <ThatIsIt/>
      <Admin name={'Max'} age={28} animal={(dog) => dog} />
    </div>
  );
}

export default App;
