import './App.css';
import { CompanyComponent } from './components/CompanyComponent';
import { FooterComponent } from './components/FooterComponent';
import Navbar from './components/NavbarComponents\'/NavbarComponents';
import { WaitComponent } from './components/WaitComponent';

function App() {
  return (
    <div>
      <>
        <Navbar />
        <WaitComponent/>
        <CompanyComponent/>
        <FooterComponent/>
      </>
    </div>
  );
}

export default App;