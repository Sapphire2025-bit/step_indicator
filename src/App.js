import './App.css';
import StepsWizard from './components/stepsWizard';

let numbers = [1, 2, 3];

function App() {
  return (
    <div className="App">
      step indicator
      <br/>
      <StepsWizard arr={numbers}/>
    </div>
  );
}

export default App;
