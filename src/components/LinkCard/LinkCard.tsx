import { LinkCardProp } from "./../../utils/types/Links";

const LinkCard: React.FC<LinkCardProp> = ({ title, href, image }) => (
    <div className="uk-width-1-2 uk-width-1-3@s uk-margin-small">
        <div className="uk-transition-toggle uk-card ag-glass-card uk-overflow-hidden uk-height-medium" tabIndex={0}>
        <a
            href={href}
            className="uk-link-reset uk-display-block uk-height-1-1 uk-position-relative"
            rel="noopener noreferrer"
            target="_blank"
        >
            {/* Background da imagem */}
            <img
            src={image}
            alt={title}
            className="uk-cover"
            data-uk-cover
            />
            
            {/* Overlay que aparece só no hover */}
            <div
            className="uk-overlay uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-overlay-default uk-transition-fade"
            style={{ opacity: 0 }}
            >
            <h3 className="uk-text-center uk-text-small uk-margin-remove uk-text-bold uk-dark">
                {title}
            </h3>
            </div>
        </a>
        </div>
    </div>
);

export default LinkCard;
