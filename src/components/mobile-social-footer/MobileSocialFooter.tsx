import { ActiveSocialShareIcon } from "../icons/ActiveSocialShareIcon";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import FacebookIcon from "../../../images/icon-facebook.svg";
import TwitterIcon from "../../../images/icon-twitter.svg";
import PinterestIcon from "../../../images/icon-pinterest.svg";
import { SocialIconFooterProps } from "../../types";

import "./MobileSocialFooter.css";

export const MobileSocialFooter = ({
  isSocialMediaBarShowing,
}: SocialIconFooterProps) => {
  return (
    <footer className="social-icon-footer flex-container">
      <div className="icon-and-text-container flex-container">
        <p className="share-text">share</p>
        <div className="icon-container flex-container">
          <img className="icon" src={FacebookIcon} alt="" />
          <img className="icon" src={TwitterIcon} alt="" />
          <img className="icon" src={PinterestIcon} alt="" />
        </div>
      </div>
      <button className="social-share-btn">
        {isSocialMediaBarShowing ? (
          <ActiveSocialShareIcon />
        ) : (
          <SocialShareIcon />
        )}
      </button>
    </footer>
  );
};
