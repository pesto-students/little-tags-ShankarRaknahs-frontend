import logo from './logo.svg';
import './App.css';
import SubCategory from './components/SubCategory';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SubCategory SubCategory={'Men'} />
      </header>
    </div>
  );
}

export default App;
