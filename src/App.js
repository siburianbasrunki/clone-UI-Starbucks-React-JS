import './App.css';
import Back from './components/Back/Back';
import Navbar from './components/Navbar/Navbar';
import Reward from './components/Reward/Reward';
import Summer from './components/Summer/Summer';
import Cold from './components/Cold/Cold';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Reward/>
      <Back/>
      <Summer/>
      <Cold/>
      <div className='info-container'>
        <div className='info-description'>
        *Starbucks Rewards is available at participating stores. Some restrictions apply. For full program details, visit <a href='#'> starbucks.com/rewards</a>
        </div>
      </div>
    </div>
  );
}

export default App;
