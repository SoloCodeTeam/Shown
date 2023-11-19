import './App.css';
import { FooterComponent } from './components/FooterComponent';
import Navbar from './components/NavbarComponents\'/NavbarComponents';
import { WaitComponent } from './components/WaitComponent';

function App() {
  return (
    <div>
      <>
        <Navbar />
        <WaitComponent/>
        <FooterComponent/>
      </>
    </div>
  );
}

export default App;