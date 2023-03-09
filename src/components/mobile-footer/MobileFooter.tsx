import { ActiveSocialShareIcon } from "../icons/ActiveSocialShareIcon";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import FacebookIcon from "../../../images/icon-facebook.svg";
import TwitterIcon from "../../../images/icon-twitter.svg";
import PinterestIcon from "../../../images/icon-pinterest.svg";
import MichelleAvatar from "../../../images/avatar-michelle.jpg";
import "../mobile-footer/MobileFooter.css";

type MobileFooterProps = {
  isSocialMediaBarShowing: boolean;
  toggleSocialMediaBar: () => void;
};

export const MobileFooter = ({
  isSocialMediaBarShowing,
  toggleSocialMediaBar,
}: MobileFooterProps) => {
  return (
    <>
      {isSocialMediaBarShowing ? (
        <footer className="social-icon-footer flex-container">
          <div className="icon-and-text-container flex-container">
            <p className="share-text">share</p>
            <div className="icon-container flex-container">
              <img className="icon" src={FacebookIcon} alt="" />
              <img className="icon" src={TwitterIcon} alt="" />
              <img className="icon" src={PinterestIcon} alt="" />
            </div>
          </div>
          <button
            onClick={toggleSocialMediaBar}
            className="social-share-btn active-social-bar-btn"
          >
            {isSocialMediaBarShowing ? (
              <ActiveSocialShareIcon />
            ) : (
              <SocialShareIcon />
            )}
          </button>
        </footer>
      ) : (
        <footer className="mobile-footer">
          <div className="avatar-container">
            <img
              className="avatar"
              src={MichelleAvatar}
              alt="michelle avatar"
            />
            <div className="avatar-text">
              <p className="avatar-name">Michelle Appleton</p>
              <p className="avatar-date">28 Jun 2020</p>
            </div>
          </div>
          <button onClick={toggleSocialMediaBar} className="social-share-btn">
            <SocialShareIcon />
          </button>
        </footer>
      )}
    </>
  );
};
