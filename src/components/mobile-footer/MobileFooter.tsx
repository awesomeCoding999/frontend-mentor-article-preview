import MichelleAvatar from "../../../images/avatar-michelle.jpg";
import { ShareIcon } from "../share-icon/ShareIcon";
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
      <ShareIcon />
    </footer>
  );
};
