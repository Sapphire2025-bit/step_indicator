import './App.css';

import StepsWizard from './components/stepsWizard';

let maxNumber = 10;

function App()
{
  let numbers = [];
  for(let i = 1; i <= maxNumber; i++)
  {
    numbers.push(i);
  }
  return (
    <div className="App">
      step indicator
      <br/>
      <StepsWizard arr={numbers}/>
    </div>
  );
}

export default App;
