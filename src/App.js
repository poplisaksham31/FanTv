import logo from './logo.svg';
import './App.css';
import { TopSection } from './components/TopSection';
import { BottomSection } from './components/BottomSection';
import { MiddleSection } from './components/MIddleSection';

function App() {
  return (
    <div className="App">
      <TopSection />
      <MiddleSection/>
      <BottomSection/>
    </div>
  );
}

export default App;
