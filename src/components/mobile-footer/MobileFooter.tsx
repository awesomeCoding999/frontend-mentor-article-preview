import { ActiveSocialShareIcon } from "../icons/ActiveSocialShareIcon";
import { SocialShareIcon } from "../icons/SocialShareIcon";
import { SocialBar } from "../social-bar/SocialBar";
import { Footer } from "../footer/Footer";
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
          <SocialBar />
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
        <Footer toggleSocialMediaBar={toggleSocialMediaBar} />
      )}
    </>
  );
};
