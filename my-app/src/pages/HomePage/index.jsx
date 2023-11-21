import { CompanyComponent } from '../../components/CompanyComponent';
import { FooterComponent } from '../../components/FooterComponent';
import Navbar from '../../components/NavbarComponents/NavbarComponents';
import HomeSectionComponents from '../../components/HomeSectionComponents/HomeSectionComponents';
import HomeSectionComponentsTwo from '../../components/HomeSectionComponentsTwo/HomeSectionComponentsTwo';
import HomeHeaderComponent from '../../components/HomeHeaderComponent';
import { WaitComponent } from '../../components/WaitComponent';
import HomeSectionShownwillComponent from '../../components/homeSectionShownwillComponent';
export function Home() {
    return(
        <div className="Home">
            <Navbar/>
            <HomeHeaderComponent />
            <HomeSectionShownwillComponent />
            <HomeSectionComponents />
            <HomeSectionComponentsTwo />
            <WaitComponent />
            <CompanyComponent />
            <FooterComponent />
        </div>
    )
}