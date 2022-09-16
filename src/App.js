
import './App.css';
import NavbarTop from './components/openingPg/navbar/NavbarTop';
import Solutions from './components/solutions/Solutions';
import Services from './components/services/Services';
import Industries from './components/industries/Industries';
import Clientele from './components/clientele/Clientele';
import Mission from './components/mission/Mission';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App" >
      <NavbarTop className='bg'/>
      <Solutions/>
      <Services/>
      <Industries/>
      <Clientele/>
      <Mission/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
