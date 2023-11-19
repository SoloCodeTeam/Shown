import './App.css';
import { CompanyComponent } from './components/CompanyComponent';
import { FooterComponent } from './components/FooterComponent';
import Navbar from './components/NavbarComponents\'/NavbarComponents';
import HomeSectionComponents from './components/HomeSectionComponents/HomeSectionComponents';
import HomeSectionComponentsTwo from './components/HomeSectionComponentsTwo/HomeSectionComponentsTwo';
import HomeHeaderComponent from './components/HomeHeaderComponent';
import { WaitComponent } from './components/WaitComponent';
function App() {
  return (
    <div>
      <>
        <Navbar />
        <HomeHeaderComponent />
        <HomeSectionComponents />
        <HomeSectionComponentsTwo />
        <WaitComponent/>
        <CompanyComponent/>
        <FooterComponent/>
      </>
    </div>
  );
}

export default App;