import FacebookIcon from "../../../images/icon-facebook.svg";
import TwitterIcon from "../../../images/icon-twitter.svg";
import PinterestIcon from "../../../images/icon-pinterest.svg";
import "./SocialBar.css";

export const SocialBar = () => {
  return (
    <div className="icon-and-text-container flex-container">
      <p className="share-text">share</p>
      <div className="icon-container flex-container">
        <img className="icon" src={FacebookIcon} alt="" />
        <img className="icon" src={TwitterIcon} alt="" />
        <img className="icon" src={PinterestIcon} alt="" />
      </div>
    </div>
  );
};
