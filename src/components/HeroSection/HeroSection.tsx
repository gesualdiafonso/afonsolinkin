import fotoAfonso from '../../../public/assets/foto_anime_afonso.jpeg';
import SocialIconsBar from '../SocialIcon/SocialIcon'
import { socialIcons } from '../SocialIcon/SocialIcon';

const HeroSection = () => (
    <div className="uk-text-center uk-padding-large">
        <img src={fotoAfonso} alt="AG Logo" width="200" height="200" className="uk-margin-small uk-border-rounded" /> 
        <h3 className="uk-heading-line uk-text-bold">
        <span>“Para quem não sabe para onde vai, qualquer caminho serve!”</span>
        </h3>
        <p className="uk-text-meta">— Alice Wordeland</p>
        <SocialIconsBar icons={socialIcons} />
    </div>
);

export default HeroSection;