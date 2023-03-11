import MichelleAvatar from "../../../images/avatar-michelle.jpg";
import { SocialBtn } from "../social-btn/SocialBtn";
import "../footer/Footer.css";

type FooterProps = {
  toggleSocialMediaBar: () => void;
  isSocialMediaBarShowing: boolean;
};

export const Footer = ({
  toggleSocialMediaBar,
  isSocialMediaBarShowing,
}: FooterProps) => {
  return (
    <footer className="mobile-footer">
      <div className="avatar-container">
        <img className="avatar" src={MichelleAvatar} alt="michelle avatar" />
        <div className="avatar-text">
          <p className="avatar-name">Michelle Appleton</p>
          <p className="avatar-date">28 Jun 2020</p>
        </div>
      </div>
      <SocialBtn
        isSocialMediaBarShowing={isSocialMediaBarShowing}
        toggleSocialMediaBar={toggleSocialMediaBar}
      />
    </footer>
  );
};
