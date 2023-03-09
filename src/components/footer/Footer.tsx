import MichelleAvatar from "../../../images/avatar-michelle.jpg";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import "../footer/Footer.css";

type FooterProps = {
  toggleSocialMediaBar: () => void;
};

export const Footer = ({ toggleSocialMediaBar }: FooterProps) => {
  return (
    <footer className="mobile-footer">
      <div className="avatar-container">
        <img className="avatar" src={MichelleAvatar} alt="michelle avatar" />
        <div className="avatar-text">
          <p className="avatar-name">Michelle Appleton</p>
          <p className="avatar-date">28 Jun 2020</p>
        </div>
      </div>
      <button onClick={toggleSocialMediaBar} className="social-share-btn">
        <SocialShareIcon />
      </button>
    </footer>
  );
};
