import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export interface SocialIconsProp {
    name: string;
    icon: React.ReactNode;
    href: string; 
}

export const socialIcons: SocialIconsProp[]= [
    {
        name: "Email",
        icon: <MdEmail />,
        href: "mailto:gesualdiafonsoarr@gmail.com"
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/gesualdiafonso"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/afonso-gesualdi-aaa9bb244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&original_referer=https%3A%2F%2Fdevafonso.vercel.app%2F"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/gesualdi.design?igsh=MTd0ZHY2N2I1N3k1ZA%3D%3D&utm_source=qr"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        href: "https://www.facebook.com/profile.php?id=61557359953407&mibextid=wwXIfr&rdid=u8NvUkJ8LkIDpmG1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DzRTzxJMH%2F%3Fmibextid%3DwwXIfr"
    },
];

const SocialIconsBar: React.FC<{icons: SocialIconsProp[]}> = ({icons}) => (
    <div className="uk-flex uk-flex-center uk-margin-large-top">
        {icons.map(({name, icon, href}) => (
            <a 
                key={name}
                href={href}
                className="uk-icon-button uk-margin-small-right"
                rel="nooopener noreferrer"
                title={name}
                target="_blank"
            >{icon}</a>

        ))}
    </div>
);

export default SocialIconsBar;
