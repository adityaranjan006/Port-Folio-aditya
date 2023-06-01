import {BrowserRouter} from 'react-router-dom';
import {About,Experience,Contact,Hero,Navbar,Tech,StarsCanvas} from './components';
import AlsoView from './components/AlsoView';

const App=()=> {
  return (
   <BrowserRouter>
    <div className="relative z-10 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <About/>
        <Experience/>
        <Tech/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <div>
          <AlsoView/>
        </div>
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
