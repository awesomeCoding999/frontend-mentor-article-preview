import MichelleAvatar from "../../../images/avatar-michelle.jpg";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import "./MobileFooter.css";

export const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="avatar-container">
        <img className="avatar" src={MichelleAvatar} alt="michelle avatar" />
        <div className="avatar-text">
          <p className="avatar-name">Michelle Appleton</p>
          <p className="avatar-date">28 Jun 2020</p>
        </div>
      </div>
      <SocialShareIcon />
    </footer>
  );
};
