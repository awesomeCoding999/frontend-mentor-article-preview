import { ActiveSocialShareIcon } from "../icons/ActiveSocialShareIcon";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import "./SocialBtn.css";

type SocialBtnProps = {
  isSocialMediaBarShowing: boolean;
  toggleSocialMediaBar: () => void;
};

export const SocialBtn = ({
  isSocialMediaBarShowing,
  toggleSocialMediaBar,
}: SocialBtnProps) => {
  return (
    <button
      aria-label="social share button"
      onClick={toggleSocialMediaBar}
      className="social-share-btn active-social-bar-btn"
    >
      {isSocialMediaBarShowing ? (
        <ActiveSocialShareIcon />
      ) : (
        <SocialShareIcon />
      )}
    </button>
  );
};
