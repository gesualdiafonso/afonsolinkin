import '../public/css/global.css'
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import HeroSection from './components/HeroSection/HeroSection';
import { Links } from './utils/types/Links';
import LinkCard from './components/LinkCard/LinkCard';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className='uk-container uk-container-small uk-padding' uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <HeroSection />
      <div className='uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s' uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 300">
        {Links.map(link => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App
